import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
   it('should render Card', () => {
      const stock = {
         name: 'Netflix',
         symbol: 'NTFL34',
         currentPrice: 'R$ 40,99',
         averagePrice: 'R$ 33,99',
         amount: 123,
         stockEarnings: 'R$123,33',
      };

      render(
         <Card
            name={stock.name}
            symbol={stock.symbol}
            currentPrice={stock.currentPrice}
            averagePrice={stock.averagePrice}
            amount={stock.amount}
            stockEarnings={stock.stockEarnings}
         />
      );

      const card = screen.getByText(/netflix/i);
      expect(card).toBeInTheDocument();
   });
});
