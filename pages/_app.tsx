import '../styles/globals.css'
import type { AppProps } from 'next/app'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import 'highlight.js/styles/atom-one-light.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Head>
      
    <style> @import url(&apos;https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap&apos;);
    </style>
    <style>@import url(&apos;https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&family=Montserrat:wght@300&family=Saira+Condensed:wght@100&display=swap&apos;);
    </style>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
  <Component {...pageProps} />
  </div>);
}

export default MyApp
