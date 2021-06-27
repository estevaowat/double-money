import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
   it('should render Header with correct title', () => {
      render(<Header />);
      const title = screen.getByText(/investimentos/i);

      expect(title).toBeInTheDocument();
   });
});
