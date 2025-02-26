// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add your favicon link here */}
          <link rel="icon" href="/images/favicon.ico" />
          <title>كأنك تراه</title>
          {/* Other meta tags, title, etc. can also be added here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;