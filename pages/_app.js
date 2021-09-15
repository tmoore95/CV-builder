import "../styles/globals.css";
import { CvContextProvider } from "../store/cv-context";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>CV Builder</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/page-facing-up_1f4c4.png"
        ></link>
      </Head>
      <CvContextProvider>
        <Component {...pageProps} />
      </CvContextProvider>
    </React.Fragment>
  );
}

export default MyApp;
