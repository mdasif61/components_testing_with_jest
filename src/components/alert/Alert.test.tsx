import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Alert from "./Alert"

test('render alert component',()=>{
    render(<Alert icon variant='warning'>This is alert message</Alert>);

    const alertBody=screen.getByTestId('alert-container');
    expect(alertBody).toHaveClass('bg-warning-100')
    expect(alertBody).toBeInTheDocument();

    const headingEl=screen.getByRole('heading');
    expect(headingEl).toHaveClass('text-warning-400');
    expect(headingEl).toBeInTheDocument();
    expect(headingEl).toHaveTextContent('This is alert message');

    const iconEl=screen.getByTestId('icons');
    expect(iconEl).toBeInTheDocument()
    expect(iconEl).toHaveClass('m-2');
    expect(iconEl).toHaveAttribute('data-icon','circle-exclamation')

})