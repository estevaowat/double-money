import React from 'react';
import './styles.css';

interface CardProps {
   name: string;
   symbol: string;
   currentPrice: string;
   averagePrice: string;
   amount: number;
   stockEarnings: string;
}

const Card: React.FC<CardProps> = ({
   name,
   symbol,
   currentPrice,
   averagePrice,
   amount,
   stockEarnings,
}) => (
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

export default Card;
