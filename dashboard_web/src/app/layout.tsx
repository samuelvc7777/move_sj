import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Use Inter for a clean modern look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoveSJ - Painel Admin",
  description: "Painel de administração do MoveSJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased flex flex-col md:flex-row min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
