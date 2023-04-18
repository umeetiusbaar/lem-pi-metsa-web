import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://icons8.com/icons/set/favicon-tree"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet"></link>
        <link
          type="image/png"
          sizes="32x32"
          rel="icon"
          href="/icons8-evergreen-32.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
