import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import "pure-react-carousel/dist/react-carousel.es.css";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Fabterior</title>
                    <meta />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" />
                </Head>

                <Component {...pageProps} />
            </div>
        </Layout>
    );
}

export default MyApp;
