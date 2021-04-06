import Head from "next/head";
import PreviewCard from "../components/preview-card";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PreviewCard  />
      </main>
    </div>
  );
}
