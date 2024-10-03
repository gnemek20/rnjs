import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kwondow</title>
        <meta property='og:description' content='엄청난 설명' />
        <meta property='og:image' content='https://llpb2hr4wxbuf0dj.public.blob.vercel-storage.com/peroro-UXjbduNoBA816QJhoiZVDsjKY2RqCx.jpg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
