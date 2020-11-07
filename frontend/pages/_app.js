import '../styles.css'
import Head from "next/head";


function MyApp({Component, pageProps}) {
    return <div className="app-container">
        <Head>
            <title>Venture@Brown</title>
        </Head>
        <Component {...pageProps} />
    </div>
}

export default MyApp
