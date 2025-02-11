import Header from '@/components/header/Header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders a home link', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');

    expect(links[0].textContent).toEqual('Home');
    expect(links[0].href).toContain('/');
  });

  it('renders a characters link', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');

    expect(links[1].textContent).toEqual('Characters');
    expect(links[1].href).toContain('/people');
  });

  it('renders a vehicles link', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');

    expect(links[2].textContent).toEqual('Vehicles');
    expect(links[2].href).toContain('/vehicles');
  });
});
