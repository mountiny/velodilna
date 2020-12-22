import '../styles/index.css'

import Head from 'next/head';

function App({ Component, pageProps }) {

  return (<>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />
      <meta name="keywords" content="kola, oprava, bike, opravna, prodejna, servis, velodílna, prodej" />
      <meta name="author" content="@mountiny" />
      <meta name="description" content="Prodejna a servis kol ve Slušovicích. Poradíme s volbou nového kola a opravíme cokoliv, co se má točit." />
      <title>Velodílna Slušovice</title>
      <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="assets/images/favicon/site.webmanifest" />
      <link rel="mask-icon" href="assets/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default App
