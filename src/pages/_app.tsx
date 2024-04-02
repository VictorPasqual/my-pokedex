// pages/_app.tsx
import Head from 'next/head';
import '../styles/index.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon_io/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp;
