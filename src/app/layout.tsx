import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LA BASE SECRÈTE DE KIMIAA",
  description: "Accès rapide aux chapitres du manga Ao Ashi",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
