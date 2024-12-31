import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom/types/screen';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const titleElement = screen.getByText(/Cabral Libii/i);
  expect(titleElement).toBeInTheDocument();
});
