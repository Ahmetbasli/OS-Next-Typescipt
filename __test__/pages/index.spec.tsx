import { render, screen } from '@testing-library/react';
import Home from 'pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const helloWorldElement = screen.getByText('Hello, world!');

    expect(helloWorldElement).toBeInTheDocument();
  });
});
