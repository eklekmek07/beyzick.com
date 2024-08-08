import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

            <Image
              src="/image.jpeg"
              alt="lo"
              className={styles.vercelLogo}
              priority
              width={1920}
              height={1080}
/>

    </main>
  );
}
