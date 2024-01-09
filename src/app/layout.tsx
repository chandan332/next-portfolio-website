import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header/Header";
import { Providers } from "@/redux/provider";
import { ThemeProvider } from "@/components/darkTheme/theme-provider";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Chandan Karmakar",
  description: "Chandan Karmakar, This is my portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID!} />
      <body className={`mt-10 pt-0 ${inter.className}`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <Header />
            {children}
          </ThemeProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
