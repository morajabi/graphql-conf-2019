import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

import modernNormalize from '../utils/modern-normalize'

injectGlobal`
  ${modernNormalize};

  body, html { 
    padding: 0;
    background: black;
  }

  * { 
    color: white;
    font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src:  url('/static/fonts/SpaceGrotesk-Regular.woff2') format('woff2'),
          url('/static/fonts/SpaceGrotesk-Regular.woff') format('woff');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src:  url('/static/fonts/SpaceGrotesk-Bold.woff2') format('woff2'),
          url('/static/fonts/SpaceGrotesk-Bold.woff') format('woff');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src:  url('/static/fonts/SpaceGrotesk-Light.woff2') format('woff2'),
          url('/static/fonts/SpaceGrotesk-Light.woff') format('woff');
    font-weight: 300;
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://use.typekit.net/fkv8pfd.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `try{Typekit.load({ async: true });}catch(e){}`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
