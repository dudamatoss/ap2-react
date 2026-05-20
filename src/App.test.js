import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza titulo e mensagem de boas-vindas', () => {
  render(<App nome="Maria" titulo="Entrevero" />);
  expect(screen.getByText('Entrevero')).toBeInTheDocument();
  expect(screen.getByText(/Seja bem vindo/i)).toBeInTheDocument();
  expect(screen.getByText('Maria')).toBeInTheDocument();
});
