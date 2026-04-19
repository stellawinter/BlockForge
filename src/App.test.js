// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockForge/i);
    expect(titleElement).toBeInTheDocument();
});
