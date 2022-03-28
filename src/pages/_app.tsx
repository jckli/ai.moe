import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from "swr";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>hayasaka.moe</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="description"
          content={"A site to display the status of the hayasaka.moe project."}
        />
      </Head>
      <SWRConfig>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp
