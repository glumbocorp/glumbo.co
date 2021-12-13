import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/">
          <a className={styles.navlink} id={styles.glumbocoin}>
            GlumboCoin
          </a>
        </Link>
        <Link href="/">
          <a className={styles.navlink} id={styles.kca}>
            You WHAT????
          </a>
        </Link>
        <Link href="/">
          <a className={styles.navlink} id={styles.live}>
            Glumbo Live
          </a>
        </Link>
        <Link href="/">
          <a className={styles.navlink} id={styles.chaos}>
            Chaos
          </a>
        </Link>
      </div>
    </div>
  );
}
