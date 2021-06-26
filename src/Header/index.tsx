import React from 'react';
import './styles.css';

const Title: React.FC = () => <strong className="title">Investimentos</strong>;

const Header = () => (
   <div className="header">
      <Title />
   </div>
);

export default Header;
