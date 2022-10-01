import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="https://files.worldwind.arc.nasa.gov/artifactory/web/0.9.0/worldwind.min.js"
          type="text/javascript"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
