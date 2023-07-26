import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes"

import "../styles/globals.css";

import { Toaster } from "@/components/ui/toaster";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider attribute="class">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <main>
          <Component {...pageProps} />
          <Toaster />
        </main>
      </ThemeProvider>
    </>
  );
}
