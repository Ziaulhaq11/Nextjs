//File has to be "_document.js"
//This file will run on server. And if we leave this blank. Then we will get internal servor error. So we have to render Main which is our App & Next Script will help to run on server.
//we dont usually do this
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
