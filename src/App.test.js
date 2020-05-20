import React from 'react';
import { render } from '@testing-library/react';
import ProductsPage from './components/App';

test('renders learn react link', () => {
  const { getByText } = render(<ProductsPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
