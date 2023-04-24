import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Vinami</title>
                <meta name="description" content="Vinami" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Vinami" />
                <meta name="keywords" content="Wine" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="nositelinkssearchbox" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Header />
            <main>{/* Your content goes here */}</main>
            <Footer />
        </>
    );
}
