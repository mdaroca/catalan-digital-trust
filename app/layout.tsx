import type { Metadata, Viewport } from "next";
import { Ubuntu } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "PrivaciCAT - Seguretat Digital, Privacitat i Drets",
  description:
    "Assessorament, formació i serveis de ciberseguretat, privacitat i drets digitals en català. Al servei de la transformació social als Països Catalans.",
};

export const viewport: Viewport = {
  themeColor: "#0f1a0f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca">
      <body className={`${ubuntu.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
