import { ICrypto } from "@/types";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export const fetchApi = async (): Promise<ICrypto[]> => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};
