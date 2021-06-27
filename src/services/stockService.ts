import formatCurrency from '../Utils/currency';

type StockEarnings = {
   currentPrice: number;
   averagePrice: number;
   amount: number;
};

const getStockEarnings = ({
   currentPrice,
   averagePrice,
   amount,
}: StockEarnings) => currentPrice * amount - averagePrice * amount;

const formatStocks = (stocks: any[]) =>
   stocks.map((stock) => {
      const { currentPrice, averagePrice, amount } = stock;

      const stockEarnings = getStockEarnings({
         currentPrice,
         averagePrice,
         amount,
      });

      return {
         ...stock,
         currentPrice: formatCurrency(currentPrice),
         averagePrice: formatCurrency(averagePrice),
         stockEarnings: formatCurrency(stockEarnings),
      };
   });

export default async (): Promise<any[]> => {
   const stocksFromDatabase = [
      {
         name: 'Netflix',
         symbol: 'NTFL34',
         currentPrice: 100,
         averagePrice: 50,
         amount: 100,
      },
      {
         name: 'Netflix',
         symbol: 'NTFL34',
         currentPrice: 99.93,
         averagePrice: 23.44,
         amount: 100,
      },
      {
         name: 'Netflix',
         symbol: 'NTFL34',
         currentPrice: 99.93,
         averagePrice: 23.44,
         amount: 100,
      },
      {
         name: 'Netflix',
         symbol: 'NTFL34',
         currentPrice: 99.93,
         averagePrice: 23.44,
         amount: 100,
      },
      {
         name: 'Netflix',
         symbol: 'NTFL34',
         currentPrice: 99.93,
         averagePrice: 23.44,
         amount: 100,
      },
      {
         name: 'Netflix',
         symbol: 'NTFL34',
         currentPrice: 99.93,
         averagePrice: 23.44,
         amount: 1100,
      },
   ];

   const stocks = formatStocks(stocksFromDatabase);
   return stocks;
};
