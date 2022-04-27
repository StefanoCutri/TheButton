import { render, screen } from '@testing-library/react';
import App from './App';

test('The Button title', () => {
    render( < App / > );
    const element = screen.getByText(/The Button/);
    expect(element).toBeInTheDocument();
});