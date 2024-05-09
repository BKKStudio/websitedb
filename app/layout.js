"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/Theme/provider";
import Footer from "./components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
   <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Meaow Meaow - Store</title>
        <link
          rel="icon"
          href="/Images/Logo/Logolight.png"
          type="image/png"
          sizes="50x50"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="p-0 m-0 font-IBM">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
