import { SessionProvider } from "next-auth/react"
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'src/apollo';
import "./styles.css"

import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import Layout from "../components/layout";


// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {

  const client = useApollo(pageProps.token, pageProps.initialApolloState);

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </SessionProvider>
  )
}


