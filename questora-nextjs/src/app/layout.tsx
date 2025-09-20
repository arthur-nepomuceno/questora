import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Questora - SoPerguntas",
  description: "Teste seus conhecimentos em diferentes áreas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
