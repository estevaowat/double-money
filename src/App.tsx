import React from 'react';
import Cards from './Cards';
import Actions from './Actions';
import Header from './Header';
import './App.css';

const App: React.FC = () => (
   <div>
      <Header />
      <Actions />
      <Cards />
   </div>
);

export default App;
