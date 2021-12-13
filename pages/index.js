import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GlumboCorp</title>
        <meta name="description" content="Your Favorite Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.bigboxholder}>
          <div className={styles.bigbox} id={styles.lbigbox}>
            We know your address.
          </div>
          <div className={styles.bigbox} id={styles.rbigbox}>
            <div id={styles.shrinkcontainerrbb}>
              <p>Find out how:</p>
              <button className={styles.flatbuttonm}>Doxx Me</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
