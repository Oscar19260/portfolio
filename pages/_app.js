import "bootswatch/dist/superhero/bootstrap.min.css"; // superhero, sketchy
import "../global.css";

import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Oscar Delgadillo Portfolio website"
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
