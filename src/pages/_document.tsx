/* eslint-disable @typescript-eslint/ban-ts-comment */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{/*  Add font files or html attributes here. */}</Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* @ts-ignore */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
