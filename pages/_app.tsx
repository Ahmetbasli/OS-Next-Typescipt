import 'styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="os-nextjs-typescript project" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
