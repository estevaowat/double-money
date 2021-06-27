import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Card from './Card';
import getStocks from '../services/stockService';
import './styles.css';

const Cards: React.FC = () => {
   const [stocks, setStocks] = useState<any[]>([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      const getStocksFromDatabase = async () => {
         const stocksFromDatabase = await getStocks();
         setStocks(stocksFromDatabase);
      };

      getStocksFromDatabase();
      setIsLoading(false);
   }, []);

   return (
      <div className="stocks">
         {isLoading ? (
            <Loader />
         ) : (
            stocks.map((stock) => (
               <Card
                  name={stock.name}
                  symbol={stock.symbol}
                  currentPrice={stock.currentPrice}
                  averagePrice={stock.averagePrice}
                  amount={stock.amount}
                  stockEarnings={stock.stockEarnings}
               />
            ))
         )}
      </div>
   );
};

export default Cards;
