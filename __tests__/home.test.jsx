import HomePage from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
  it('renders a home title', () => {
    render(<HomePage />);

    const homeText = screen.getByText('SW Home Page');
    expect(homeText).toBeInTheDocument();
  });
});
