import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders constains title', () => {
  render(<App />);
  const titleElement = screen.getByText(/The Person Finder/i);
  expect(titleElement).toBeInTheDocument();
});

test('fetches data', () => {});

test('search input recieves user input ', () => {});

test('filter function updates people array onchange', () => {});

test('if error, users recieves error message', () => {});

test('if no results, users recieves no results message', () => {});

test('while loading, loading spinner is shown', () => {});
