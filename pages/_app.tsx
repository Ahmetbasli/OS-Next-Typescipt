import MetaData from 'components/pages/MetaData';
import StyledApp from 'components/pages/StyledApp';
import { SessionProvider } from 'contexts/session';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <MetaData />
      <SessionProvider>
        <StyledApp>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
