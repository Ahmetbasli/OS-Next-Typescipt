import MetaData from 'components/pages/MetaData';
import StyledApp from 'components/pages/StyledAppProps';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <MetaData />

      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
