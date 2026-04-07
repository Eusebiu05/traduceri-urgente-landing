import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Importăm și configurăm fontul Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  // Aducem mai multe grosimi pentru a avea flexibilitate la titluri (bold, black etc.)
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Traduceri Urgente | Gata în 1-2 ore",
  description: "Traduceri autorizate pentru acte auto, contracte și documente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro" // Am schimbat în română
      className={`${montserrat.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}