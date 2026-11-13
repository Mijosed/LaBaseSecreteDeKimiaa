# kimiaa-plug

Site Next.js d'une page : une grille d'images cliquables qui renvoient vers les chapitres d'Ao Ashi sur un site externe.

## Lancer

```bash
npm install
npm run dev
```

## Ajouter un chapitre

1. Mets l'image dans `public/chapters/` (ex. `chapitre-4.jpg`).
2. Ajoute une entrée dans `src/data/chapters.ts`.
3. Change `EXTERNAL_SITE_URL` pour pointer vers le vrai site.
