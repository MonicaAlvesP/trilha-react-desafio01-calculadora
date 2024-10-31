import { render, fireEvent, screen } from '@testing-library/react';
import { App } from './App';

describe('Calculator App', () => {
  it('should render the calculator with initial display as 0', () => {
    render(<App />);
    expect(screen.getByDisplayValue('0')).toBeTruthy();
  });
});

describe('Calculator Operations', () => {
  it('Manipulando operações de Adição', () => {
    render(<App />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('7')).toBeTruthy();
  });

  it('Manipulando operações de Subtração', () => {
    render(<App />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('3')).toBeTruthy();
  });

  it('Manipulando operações de Multiplicação', () => {
    render(<App />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('10')).toBeTruthy();
  });

  it('Manipulando operações de Divisão', () => {
    render(<App />);
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('3')).toBeTruthy();
  });

  it('Operando limpeza', () => {
    render(<App />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('C'));
    expect(screen.getByDisplayValue('0')).toBeTruthy();
  });

  it('Manipulando operação decimal', () => {
    render(<App />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByDisplayValue('5.2')).toBeTruthy();
  });

  it('Múltiplas operações', () => {
    render(<App />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('21')).toBeTruthy();
  });
});