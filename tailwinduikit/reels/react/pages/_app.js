import "../css/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Reels</title>
                <meta />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Raleway:ital,wght@0,300;0,700;1,300&display=swap" rel="stylesheet"/>            </Head>

            <Component {...pageProps} />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <script src="https://npmcdn.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
        </div>
    );
}

export default MyApp;
