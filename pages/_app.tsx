import StyledApp from 'components/pages/StyledAppProps';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement } from 'react';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="os-nextjs-typescript project" />
      </Head>
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
