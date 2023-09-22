import { Experiment } from "@amplitude/experiment-node-server";

export async function getFlags() {
  const experiment = Experiment.initializeLocal(
    "server-Pl0RmflrZt6qc8oydpqtIB1pdDh28cSB",
  );
  await experiment.start();

  return experiment;
}
