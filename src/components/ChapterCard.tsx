import Image from "next/image";
import type { Chapter } from "@/types/chapter";
import SummaryButton from "./SummaryButton";
import styles from "./ChapterCard.module.css";

export default function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <div className={styles.card}>
      <a
        href={chapter.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label={`Lire ${chapter.title}`}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={chapter.image}
            alt={chapter.title}
            fill
            sizes="(max-width: 480px) 50vw, 200px"
            className={styles.image}
          />
        </div>
        <span className={styles.title}>{chapter.title}</span>
      </a>

      {chapter.summary && <SummaryButton title={chapter.title}>{chapter.summary}</SummaryButton>}
    </div>
  );
}
