import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>hayasaka.moe</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:description"
          content={"Landing page to display the hayasaka.moe project."}
        />
        <meta
          property="og:image"
          content="/favicon.png"
        />
        <meta name="theme-color" content="#fcf4dd" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
