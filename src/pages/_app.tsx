import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import '../styles/variables.scss';
import '../styles/globals.scss';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Footer from '@/components/footer/Footer  ';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min');
    require('@popperjs/core/dist/umd/popper.min');
  }, []);

  return (
    <>
      <Head>
        <title>Toluwase and Olawale | AdeOla23</title>
        <meta
          content="Toluwase & Olawale's wedding website which contains all needed information about the event."
          name="description"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible"></meta>
        <link href="/favicon.ico" rel="icon" />
        <meta content="#87ceeb" name="theme-color"></meta>
        <meta content="toluwase, olawale" name="keywords"></meta>
        <meta content="Toluwase & Olawale" name="author"></meta>
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PT7K753T29"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PT7K753T29')
        `}
      </Script>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
