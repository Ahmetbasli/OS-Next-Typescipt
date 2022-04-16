import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/default';

export default function renderWithThemeWrapper(children: JSX.Element) {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
