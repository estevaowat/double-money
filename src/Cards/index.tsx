import React, { useEffect, useState } from 'react';

import Card from './Card';
import './styles.css';
import { IStock } from '../Interfaces';
import getStocks from '../services/stockService';

const Cards: React.FC = () => {
   const [stocks, setStocks] = useState<IStock[]>([]);

   useEffect(() => {
      const getStocksFromDatabase = async () => {
         const stocksFromDatabase = await getStocks();
         setStocks(stocksFromDatabase);
      };

      getStocksFromDatabase();
   }, []);

   return (
      <div className="stocks">
         {stocks.map((stock) => (
            <Card stock={stock} />
         ))}
      </div>
   );
};

export default Cards;
