import React from 'react';
import { IStock } from '../../Interfaces';
import './styles.css';

interface CardProps {
   stock: IStock;
}

const Card: React.FC<CardProps> = ({ stock }) => {
   const {
      name,
      symbol,
      currentPrice,
      averagePrice,
      amount,
      stockEarnings,
   } = stock;

   return (
      <div className="card">
         <div className="description">
            <strong>{name}</strong>
            <strong>{symbol}</strong>
         </div>
         <div className="info">
            <span>Cotação atual</span>
            <span>{currentPrice}</span>
         </div>
         <div className="info">
            <span>Preço médio</span>
            <span>{averagePrice}</span>
         </div>
         <div className="info">
            <span>Quantidade</span>
            <span>{amount}</span>
         </div>
         <div className="info">
            <span>Lucro/Prejuízo</span>
            <strong>{stockEarnings} </strong>
         </div>
      </div>
   );
};

export default Card;
