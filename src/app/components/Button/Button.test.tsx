import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const label = 'Click Me';
    render(<Button backgroundColor="blue" label={label} />);
    expect(screen.getByRole('button')).toHaveTextContent(label);
  });

  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const label = 'Click Me';
    render(
      <Button backgroundColor="blue" label={label} onClick={handleClick} />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the styles correctly', () => {
    const backgroundColor = 'red';
    const borderColor = 'green';
    const label = 'Test Button';
    render(
      <Button
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        label={label}
      />
    );

    const button = screen.getByRole('button');

    expect(button).toHaveStyle(`backgroundColor: ${backgroundColor}`);
    expect(button).toHaveStyle(`borderColor: ${borderColor}`);
    expect(button).toHaveStyle('borderWidth: 1px');
    expect(button).toHaveStyle('borderStyle: solid');
  });
});
