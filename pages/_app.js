// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
