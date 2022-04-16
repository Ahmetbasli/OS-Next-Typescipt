import { screen } from '@testing-library/react';
import Home from 'pages/index';

import renderWithThemeWrapper from './renderWithThemeWrapper';

describe('Home', () => {
  it('renders a heading', () => {
    renderWithThemeWrapper(<Home />);

    const helloWorldElement = screen.getByText('Hello, world!');

    expect(helloWorldElement).toBeInTheDocument();
  });
});
