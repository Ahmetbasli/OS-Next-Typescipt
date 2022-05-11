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

    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
});
