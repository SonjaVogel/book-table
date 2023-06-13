import { render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';

test('Renders the BookingPage heading', () => {
    render(<BookingPage />);
    const headingElement = screen.queryByText(/Reserve a Table/);
    expect(headingElement).not.toBeNull();
})