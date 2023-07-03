import { ICryptoData } from "@/types";
import Crypto from "./Crypto";

const CryptoTable: React.FC<ICryptoData> = ({ cryptoData }) => {
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
          {cryptoData?.map((crypto) => (
            <Crypto key={crypto?.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
