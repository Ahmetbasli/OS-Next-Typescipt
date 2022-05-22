import { render, screen, waitFor } from '@testing-library/react';
import StyledApp from 'components/pages/StyledApp';
import Index from 'pages/index';

describe('Index', () => {
  it('renders a heading', async () => {
    render(
      <StyledApp>
        <Index />
      </StyledApp>
    );

    await waitFor(() => {
      expect(screen.getByText('Hello, world!')).toBeInTheDocument();
    });
  });
});
