import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filament Coffee Track Club</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Colin Dismuke" />
        <meta
          name="description"
          content="The official website of the Filament Coffee Track Club."
        />
        <meta property="og:title" content="Filament Coffee Track Club" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="The official website of the Filament Coffee Track Club."
        />
        <meta
          property="og:image"
          content="https://static1.squarespace.com/static/5a5ab27c914e6b46ba564670/t/5d93ec408a1b0b3affaef0b1/1612793604830/?format=1500w"
        />
        <meta property="og:url" content="https://fctc.fun" />
        <meta property="og:site_name" content="Filament Coffee Track Club" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="cpdis" />
        <meta name="twitter:title" content="Filament Coffee Track Club" />
        <meta
          name="twitter:description"
          content="The official website of the Filament Coffee Track Club."
        />
        <meta name="twitter:image:alt" content="Filament Coffee" />
        <link href="style.css" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main>
        <div className="justify-center align-middle animate-pulse">
          <h1 className="text-9xl font-black uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-orange-400 to-pink-400">
            Filament Coffee Track Club
          </h1>
        </div>
      </main>
    </div>
  );
}
