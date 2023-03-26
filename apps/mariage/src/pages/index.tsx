import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
            <main>
                <h1>Vinami</h1>
                <ul>
                    <li>
                        <Link href="/food">Food</Link>
                    </li>
                    <ul>
                        <li>
                            <Link href="/food/westren">Westren</Link>
                        </li>
                        <li>
                            <Link href="/food/japanese">Japanese</Link>
                        </li>
                        <li>
                            <Link href="/food/chinese">Chinese</Link>
                        </li>
                        <li>
                            <Link href="/food/korean">Korean</Link>
                        </li>
                    </ul>
                    <li>
                        <Link href="/wine">Wine</Link>
                        <ul>
                            <li>
                                <Link href="/wine/white">White</Link>
                            </li>
                            <li>
                                <Link href="/wine/red">Red</Link>
                            </li>
                            <li>
                                <Link href="/wine/rose">Rose</Link>
                            </li>
                            <li>
                                <Link href="/wine/fortified">Fortified</Link>
                            </li>
                            <li>
                                <Link href="/wine/orange">Orange</Link>
                            </li>
                            <li>
                                <Link href="/wine/dessert">Dessert</Link>
                            </li>
                            <li>
                                <Link href="/wine/sparkling">Sparkling</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </main>
        </>
    );
}
