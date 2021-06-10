import React, { useEffect, useState } from 'react';

import Card from './Card';
import './styles.css';
import { IStock } from '../Interfaces';
import getStocks from '../services/stockService';

const Cards: React.FC = () => {
   const [stocks, setStocks] = useState<IStock[]>([]);

   useEffect(() => {
      const stocksFromDatabase = getStocks();
      setStocks(stocksFromDatabase);
   }, []);

   return (
      <div className="cards">
         {stocks.map((stock) => (
            <Card stock={stock} />
         ))}
      </div>
   );
};

export default Cards;
