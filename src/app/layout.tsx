import type { Metadata } from "next";
import "../styles/globals.css";
import { poppinsRegular } from "@/styles/fonts.config";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Meow",
  description: "Aplicación para el aprendizaje de ingles de manera interactiva y divertida",
};

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="es" suppressHydrationWarning>
        <head />
        <body
          className={`${poppinsRegular.className} max-w-screen max-h-screen w-screen h-screen overflow-x-hidden`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
