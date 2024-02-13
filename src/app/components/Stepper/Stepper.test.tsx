import React from 'react';
import { render, screen } from '@testing-library/react';
import Stepper from './Stepper';

describe('Stepper Component', () => {
  it('renders the current step and total steps correctly', () => {
    const steps = 5;
    const currentStep = 3;
    render(<Stepper steps={steps} currentStep={currentStep} />);

    expect(screen.getByText(currentStep.toString())).toBeInTheDocument();
    expect(screen.getByText(`/${steps}`)).toBeInTheDocument();
  });
});
