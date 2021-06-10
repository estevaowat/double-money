import React from 'react';
import Cards from './Cards';
import Actions from './Actions';
import Header from './components/Header';
import './App.css';

const Title: React.FC = () => <h1>Investimentos</h1>;

const App: React.FC = () => (
   <div>
      <Header />
      <Title />
      <Actions />
      <Cards />
   </div>
);

export default App;
