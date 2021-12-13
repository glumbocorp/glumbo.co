import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/GlacialIndifference/GlacialIndifference-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/GlacialIndifference/GlacialIndifference-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/GlacialIndifference/GlacialIndifference-Italic.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div>{children}</div>
    </div>
  );
}
