import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Responsive drawer test', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Responsive drawer/i);
  expect(textElement).toBeInTheDocument();
});
