import { ICrypto } from "@/types";

export const fetchApi = async (): Promise<ICrypto[]> => {
  const res = await fetch(process.env.API_URL as string, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
