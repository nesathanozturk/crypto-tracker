import { IData } from "@/types";
import Crypto from "./Crypto";

const CryptoTable: React.FC<IData> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Price</th>
            <th>Volume</th>
            <th>Change(24h)</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((crypto) => (
            <Crypto key={crypto.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
