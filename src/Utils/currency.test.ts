import formatCurrency from './currency';

describe('Currency', () => {
   it('should format number to correct format', () => {
      const numberInCurrencyFormat = formatCurrency(123.44);
      const expected = 'R$\xa0123,44';

      expect(numberInCurrencyFormat).toBe(expected);
   });
});
