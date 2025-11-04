import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlatformHighlights } from './PlatformHighlights';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children }) => <div>{children}</div>,
  },
  Variants: {},
}));

describe('PlatformHighlights', () => {
  it('renders the section title', () => {
    render(<PlatformHighlights />);
    expect(screen.getByText('What Eduêgate Offers')).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(<PlatformHighlights />);
    expect(screen.getByText(/A comprehensive, one-platform solution/i)).toBeInTheDocument();
  });

  it('renders all highlight items', () => {
    render(<PlatformHighlights />);
    const highlightTitles = [
      'Modular & Customizable',
      'Adapts to Your Curriculum',
      'Flexible Deployment',
      'Mobile-First Design',
      'Secure & Scalable',
      'End-to-End Automation',
    ];
    highlightTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
