import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import "pure-react-carousel/dist/react-carousel.es.css";
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>Foodies Restaurant Website</title>
                <meta name="Description" content="A Next.js template styled using Tailwind CSS." />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans:wght@400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
