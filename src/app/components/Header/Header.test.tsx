import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

jest.mock('next/image', () => {
  const MockedImage: React.FC<{ src: string; alt: string }> = ({
    src,
    alt
  }) => <img src={src} alt={alt} />;
  MockedImage.displayName = 'MockedImage';
  return MockedImage;
});

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByText('Join VerifyMyAge')).toBeInTheDocument();

    expect(screen.getByAltText('Company Brand')).toBeInTheDocument();
    expect(screen.getByAltText('Arrow Icon')).toBeInTheDocument();
  });
});
