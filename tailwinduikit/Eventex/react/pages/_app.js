import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import "pure-react-carousel/dist/react-carousel.es.css";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <title>Virtual Management App</title>
                    <meta />
                </Head>

                <Component {...pageProps} />
            </div>
        </Layout>
    );
}

export default MyApp;
