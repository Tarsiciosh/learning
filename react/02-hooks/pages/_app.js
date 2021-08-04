// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here

import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return( 
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    
    <Component {...pageProps} />
  </>
  )
}