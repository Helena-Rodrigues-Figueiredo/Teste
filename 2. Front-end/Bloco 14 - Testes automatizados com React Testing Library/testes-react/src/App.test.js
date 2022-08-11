import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe um botão', () => {
  render(<App />);
  const btn = screen.getAllByRole('button');
  expect(btn).toHaveLength(2);
});
