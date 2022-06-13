import "../styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>GM - Portfolio</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
