import type { Chapter } from "@/types/chapter";
import TheOutsiderSummary from "./summaries/TheOutsider";
import ShonanTrueLiesSummary from "./summaries/ShonanTrueLies";

/**
 * Cards affichées sur la page.
 * Les images sont dans public/chapters/ (attention à la casse des extensions).
 */
export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Ao Ashi",
    image: "/chapters/ao_ashi.JPG",
    url: "https://anime-sama.to/catalogue/ao-ashi/",
  },
  {
    number: 2,
    title: "Ao Ashi : Brotherfoot (Français)",
    image: "/chapters/brotherfoot.JPG",
    url: "https://m.scan-manga.com/lecture-en-ligne/Ao-Ashi-Brotherfoot-Chapitre-1-FR_194030.html",
  },
  {
    number: 3,
    title: "Ao Ashi : Brotherfoot (Anglais)",
    image: "/chapters/brotherfoot.JPG",
    url: "https://mangadot.net/manga/15669",
  },
  {
    number: 4,
    title: "Ao Ashi : The Outsider",
    image: "/chapters/the_outsider.PNG",
    url: "https://mangadot.net/manga/72847",
    summary: <TheOutsiderSummary />,
  },
  {
    number: 5,
    title: "Ao : Shonan True Lies",
    image: "/chapters/shonan.JPG",
    url: "https://mangadot.net/manga/72846",
    summary: <ShonanTrueLiesSummary />,
  },
  {
    number: 6,
    title: "Ao Ashi : Midnight Dinner",
    image: "/chapters/midnight-dinner.jpeg",
    url: "https://mangadot.net/manga/15670",
  },
];
