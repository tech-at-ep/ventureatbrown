import '../styles.css'
import fb from "../lib/firebase-config";


function MyApp({Component, pageProps}) {
    return <div className="app-container">
        {/*<Head>*/}
        {/*    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>*/}
        {/*</Head>*/}
        <Component {...pageProps} />
    </div>
}

export default MyApp
