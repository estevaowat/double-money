import React from 'react';
import { IconType } from 'react-icons';
import './styles.css';

interface ButtonProps {
   Icon: IconType;
   title: string;
}
const Button = ({ Icon, title }: ButtonProps) => (
   <button type="button" className="button-action">
      <Icon size={42} title={title} />
   </button>
);

export default Button;
