import { Html, Head, Main, NextScript } from 'next/document';
import { DocumentProps } from 'next/document';

export default function Documentads(props: DocumentProps) {
  return (
    <Html>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4742312301717342"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
