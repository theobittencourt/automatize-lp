import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";

// TODO: trocar o destaque itálico (--font-ivy-mode) por next/font/local assim
// que os arquivos da fonte IvyMode chegarem — hoje cai no fallback serif do CSS.
export const urbane = localFont({
  src: [
    { path: "../public/font/Urbane-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/font/Urbane-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../public/font/Urbane-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/font/Urbane-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../public/font/Urbane-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/font/Urbane-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../public/font/Urbane-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/font/Urbane-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../public/font/Urbane-DemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/font/Urbane-DemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../public/font/Urbane-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/font/Urbane-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../public/font/Urbane-Heavy.ttf", weight: "900", style: "normal" },
    { path: "../public/font/Urbane-HeavyItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-urbane",
  display: "swap",
});

export const geistMono = GeistMono;
