import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.navlink} id={styles.glumbocoin}>
          GlumboCoin
        </a>
      </Link>
      <a
        href="https://www.youtube.com/channel/UC6QGcqjYuxGiK1154BrBfnQ"
        className={styles.navlink}
        id={styles.kca}
      >
        You WHAT????
      </a>
      {
        //<Link href="/">
        //<a className={styles.navlink} id={styles.live}>
        //  Glumbo Live
        //</a>
        //</Link>
      }
      <Link href="/">
        <a className={styles.navlink} id={styles.chaos}>
          Chaos
        </a>
      </Link>
      <img src="/images/logo.png" id={styles.logo} alt="logo" />
    </div>
  );
}
