import type { Chapter } from "@/types/chapter";
import ChapterCard from "./ChapterCard";
import styles from "./ChapterGrid.module.css";

export default function ChapterGrid({ chapters }: { chapters: Chapter[] }) {
  return (
    <section className={styles.grid}>
      {chapters.map((chapter) => (
        <ChapterCard key={chapter.number} chapter={chapter} />
      ))}
    </section>
  );
}
