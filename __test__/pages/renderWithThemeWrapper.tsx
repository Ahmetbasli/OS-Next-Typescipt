import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: 'red',
  },
};

export default function renderWithThemeWrapper(children: JSX.Element) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
