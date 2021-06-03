import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import "pure-react-carousel/dist/react-carousel.es.css";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Radian</title>
                    <meta />
                </Head>

                <Component {...pageProps} />
            </div>
        </Layout>
    );
}

export default MyApp;
