"use client";

import { useRef, type ReactNode } from "react";
import styles from "./SummaryButton.module.css";

type Props = {
  title: string;
  children: ReactNode;
};

export default function SummaryButton({ title, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={open}
        aria-label={`Lire le résumé en français de ${title}`}
        title="Résumé en français"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8M8 17h8M8 9h2" />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          // Clic sur le fond sombre (en dehors du contenu) => fermeture
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className={styles.content}>
          <header className={styles.header}>
            <h2>Résumé : {title}</h2>
            <button type="button" className={styles.close} onClick={close} aria-label="Fermer">
              ✕
            </button>
          </header>
          <div className={styles.body}>{children}</div>
        </div>
      </dialog>
    </>
  );
}
