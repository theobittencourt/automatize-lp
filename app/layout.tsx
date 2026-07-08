import type { Metadata } from "next";
import { geistMono, urbane } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automatize Marketing | Marketing e Tráfego com IA para restaurantes",
  description:
    "Sistema que cuida de todo o seu Marketing e Tráfego com IA. Teste por 7 dias grátis.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistMono.variable} ${urbane.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
