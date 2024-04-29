import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NavbarProvider from "./context/NavbarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terapias Vinculos de Amor | Terapias para sanar tu alma",
  description:
    "Cuento con certificaciones y años de experiencia en terapias espirituales para ayudarte a sanar, desde terapia con Luz Dorada a Constelaciones Familiares.",
  metadataBase: new URL("https://terapiasvinculos.cl/"),
  keywords: ["terapias", "constelacion familiar", "terapia alternativa"],
  openGraph: {
    description:
      "Terapias espirituales para acompañarte en tu camino a sanar el alma, desde terapia con Luz Dorada a Constelaciones Familiares.",
    images: ["/Logo-m.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="cupcake">
      <body className={`${inter.className} antialiased`}>
        <NavbarProvider>
          <Navbar />
          {children}
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}
