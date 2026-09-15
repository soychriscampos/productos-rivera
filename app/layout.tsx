import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/montserrat-latin-ext-500.woff",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Productos Rivera | Mango deshidratado orgánico",
  description: "Productos Rivera, mango deshidratado orgánico de Escuinapa, Sinaloa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html className={`${montserrat.variable} h-full antialiased`} lang="es-MX"><body className="min-h-full flex flex-col">{children}</body></html>;
}
