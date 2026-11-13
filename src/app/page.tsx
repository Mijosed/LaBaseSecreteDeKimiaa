import ChapterGrid from "@/components/ChapterGrid";
import CreatorBadge from "@/components/CreatorBadge";
import { chapters } from "@/data/chapters";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>LA BASE SECRÈTE DE KIMIAA</h1>
        <p>Ao Ashi</p>
      </header>
      <ChapterGrid chapters={chapters} />
      <CreatorBadge />
    </main>
  );
}
