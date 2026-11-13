import type { ReactNode } from "react";

export type Chapter = {
  /** Numéro du chapitre */
  number: number;
  /** Titre affiché sous l'image */
  title: string;
  /** Image cliquable (chemin dans /public ou URL distante) */
  image: string;
  /** Lien vers le chapitre sur le site externe */
  url: string;
  /** Résumé en français (optionnel) : affiche le bouton « doc » sur la card */
  summary?: ReactNode;
};
