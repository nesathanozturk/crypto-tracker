export interface ICrypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  total_volume: number;
  price_change_24h: number;
  market_cap: number;
}

export interface IData {
  data: ICrypto[];
}
