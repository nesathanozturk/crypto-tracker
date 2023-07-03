"use client";

import { ICryptoData } from "@/types";
import Crypto from "./Crypto";
import { useContext } from "react";
import { InputContext } from "@/context/InputContext";
import { IContext } from "@/types";

const CryptoTable: React.FC<ICryptoData> = ({ cryptoData }) => {
  const { term } = useContext(InputContext) as IContext;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Total Volume</th>
            <th>Change(24h)</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData
            ?.filter((crypto) => {
              if (term === "") {
                return cryptoData;
              } else if (
                crypto.name
                  .toLocaleLowerCase()
                  .includes(term.toLocaleLowerCase())
              ) {
                return cryptoData;
              }
            })
            .map((crypto) => (
              <Crypto key={crypto?.id} crypto={crypto} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
