import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <iframe 
          id="printFrame" 
          style={{height: '0px', width: '0px', position: 'absolute'}}
        ></iframe>
      </body>
    </Html>
  )
}
