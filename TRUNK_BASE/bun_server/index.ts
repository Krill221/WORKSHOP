import { getFlags } from "./flags";
import * as amplitude from "@amplitude/analytics-node";

amplitude.init("50231d51dc0981810df71ea2bce095c9", {
  logLevel: amplitude.Types.LogLevel.Warn,
});

async function bootstrap() {
  const experiment = await getFlags();

  Bun.serve({
    async fetch() {
      let body = "";

      const user = { device_id: "id12123" };
      const flags = await experiment.evaluate(user);
      console.log(flags);

      if (flags["header_1_feature_flag"]?.value === "on") {
        body += "<h1>HEADER_1_FEATURE_FLAG<h1>";
      }
      body += "<div>Bun featMain1 Bun dev dev dev!!!<div>";

      return new Response(body, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    },
    port: 3000,
  });
}
bootstrap();
