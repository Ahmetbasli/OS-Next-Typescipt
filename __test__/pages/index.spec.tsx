import { render, screen } from '@testing-library/react';
import StyledApp from 'components/pages/StyledAppProps';
import Index from 'pages/index';

describe('Index', () => {
  it('renders a heading', () => {
    render(
      <StyledApp>
        <Index />
      </StyledApp>
    );

    const helloWorldElement = screen.getByText('Hello, world!');

    expect(helloWorldElement).toBeInTheDocument();
  });
});
