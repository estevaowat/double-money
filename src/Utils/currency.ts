export default (value: number) => {
   const currencyFormatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
   });

   return currencyFormatter.format(value);
};
