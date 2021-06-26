import querystring from 'querystring';
import formatCurrency from '../Utils/currency';
import { IStockEarnings, IStockRaw, IStock } from '../Interfaces';
import api from './api';

const getStockEarnings = ({
   currentPrice,
   averagePrice,
   amount,
}: IStockEarnings) => currentPrice * amount - averagePrice * amount;

const formatStocks = (stocks: IStockRaw[]) =>
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

export default async (): Promise<IStock[]> => {
   const queryParams = querystring.stringify({
      function: 'TIME_SERIES_INTRADAY',
      symbol: 'IBM',
      interval: '60min',
      apikey: process.env.REACT_APP_ALPHA_VANTAGE_API_KEY,
   });

   const response = await api.get(`/query?${queryParams}`);
   console.log(response.data);

   const stocks = [
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

   const stocksFormatted = formatStocks(stocks);
   return stocksFormatted;
};
