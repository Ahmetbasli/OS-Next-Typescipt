import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from 'theme/default';

const GlobalStyle = createGlobalStyle`
html,
body {
  color: red;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="os-nextjs-typescript project" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}
