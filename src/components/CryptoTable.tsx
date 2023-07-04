"use client";

import { ICryptoData } from "@/types";
import Crypto from "./Crypto";
import { useContext } from "react";
import { InputContext } from "@/context/InputContext";
import { IContext } from "@/types";

const CryptoTable: React.FC<ICryptoData> = ({ cryptoData }) => {
  const { term } = useContext(InputContext) as IContext;

  const isCoinFound = cryptoData?.every(
    (crypto) => !crypto.name.toLowerCase().includes(term.toLowerCase())
  );

  const filteredCryptoData = cryptoData
    ?.filter((crypto) => crypto.name.toLowerCase().includes(term.toLowerCase()))
    ?.map((crypto) => <Crypto key={crypto.id} crypto={crypto} />);

  return (
    <>
      {isCoinFound ? (
        <h1 className="pb-10 text-xl md:text-2xl text-gray-400 text-center underline">
          Coin you are looking for is not found!
        </h1>
      ) : (
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
            <tbody>{filteredCryptoData}</tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CryptoTable;
