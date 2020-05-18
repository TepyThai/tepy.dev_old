import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <SkipNavLink />
        <body>
          <SkipNavContent>
            <Main />
          </SkipNavContent>
          <NextScript />
        </body>
      </Html>
    );
  }
}
