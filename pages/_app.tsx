import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kwon Window</title>
        <meta property='og:description' content='목표는 윈도우처럼' />
        <meta property='og:image' content='https://llpb2hr4wxbuf0dj.public.blob.vercel-storage.com/peroro-UXjbduNoBA816QJhoiZVDsjKY2RqCx.jpg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
