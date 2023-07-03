export interface ICrypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  total_volume: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

export interface ICryptoData {
  cryptoData: ICrypto[];
}
export interface ICryptoProps {
  crypto: ICrypto;
}

export interface IContext {
  term: string;
  setTerm: (term: string) => void;
}

export interface IChildren {
  children: React.ReactNode;
}
