import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SideNavbar from "@/components/SideNavbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Buen Billete",
  description:
    "Aplicación web para gestionar de manera cómoda tus gastos e ingresos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <div className="flex">
          <SideNavbar />
          <div className="p-8 w-full ">{children}</div>
        </div>
      </body>
    </html>
  );
}
