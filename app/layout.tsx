import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI/ML Roadmap | De $30k a $185k/año",
  description:
    "Roadmap interactivo personal para convertirme en AI/ML Engineer. Ejercicios, progreso persistente y mapa visual de todas las fases.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "PyTorch",
    "LLMs",
    "MLOps",
  ],
  robots: {
    index: false, // sitio personal, sin indexar
    follow: false,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "AI/ML Roadmap | De $30k a $185k",
    description:
      "Mi ruta personal para convertirme en AI Engineer de producción.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // soporte para notch / Dynamic Island de iPhone
  themeColor: "#06060a", // color de la barra de Safari en iOS
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="bg-background">
      <body className={`${sora.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
