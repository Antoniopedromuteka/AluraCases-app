import GlobalStyle from "../src/theme/GlobalStyle"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,700;1,900&display=swap" rel="stylesheet"/>
          {/* < Google tag (gtag.js) --> */}
          <script dangerouslySetInnerHTML={{
            __html: `
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-MSX6HD0LW2"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
      
                  gtag('config', 'G-MSX6HD0LW2');
                </script>
            `
          }}/>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp