import Header from "../components/Header";
import Upload from "../components/Upload";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>stardew.me</title>
        <meta
          name="description"
          content="Generate a Stardew Valley avatar for your player."
        />
        <meta
          name="keywords"
          content="stardew valley, stardew, avatar, generator, stardew avatar, stardew generator, stardew valley avatar, stardew valley generator, stardew valley avatar generator, stardew valley avatar maker, stardew valley maker, stardew valley avatar creator, stardew valley creator, stardew valley avatar generator, stardew"
        />
        <meta name="author" content="stardew.me" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@1afond @clxmente" />
        <meta name="twitter:title" content="stardew.me" />
        <meta
          name="twitter:description"
          content="Generate a picture of your Stardew Valley player."
        />
        {/* <meta
          name="twitter:image"
          content="https://stardew.me/assets/og-image.png"
        /> */}
        <meta property="og:title" content="stardew.me" />
        <meta
          property="og:description"
          content="Generate a picture of your Stardew Valley player."
        />
        {/* <meta
          property="og:image"
          content="https://stardew.me/assets/og-image.png"
        /> */}
        <meta property="og:url" content="https://stardew.me" />
        <meta property="og:site_name" content="stardew.me" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Upload />
        </main>
        <Footer />
      </div>
    </>
  );
}
