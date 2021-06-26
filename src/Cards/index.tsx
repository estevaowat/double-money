import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Card from './Card';
import { IStock } from '../Interfaces';
import getStocks from '../services/stockService';
import './styles.css';

const Cards: React.FC = () => {
   const [stocks, setStocks] = useState<IStock[]>([]);
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
            stocks.map((stock) => <Card stock={stock} />)
         )}
      </div>
   );
};

export default Cards;
