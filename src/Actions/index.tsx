import React from 'react';
import { HiOutlineDocumentAdd, HiPlus } from 'react-icons/hi';
import Button from '../components/Button';
import './styles.css';

const Actions: React.FC = () => (
   <div className="actions">
      <Button Icon={HiOutlineDocumentAdd} title="Importar CSV" />
      <Button Icon={HiPlus} title="Adicionar ação" />
   </div>
);

export default Actions;
