export interface IStockRaw {
   name: string;
   symbol: string;
   currentPrice: number;
   averagePrice: number;
   amount: number;
}

export interface IStock {
   name: string;
   symbol: string;
   currentPrice: string;
   averagePrice: string;
   amount: number;
   stockEarnings: string;
}

export interface IStockEarnings {
   currentPrice: number;
   averagePrice: number;
   amount: number;
}
