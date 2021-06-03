import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import "pure-react-carousel/dist/react-carousel.es.css";
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>We Care</title>
                <meta name="Description" content="A Next.js template styled using Tailwind CSS." />
            </Head>

            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
