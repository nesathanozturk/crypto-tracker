import Image from "next/image";
import { ICryptoProps } from "@/types";

const Crypto: React.FC<ICryptoProps> = ({ crypto }) => {
  return (
    <>
      <tr className="hover">
        <td>
          <Image
            src={crypto?.image}
            alt={crypto?.name}
            width={35}
            height={35}
          />
          {crypto?.name}
        </td>
        <td>{crypto?.symbol}</td>
        <td>{crypto?.current_price}</td>
        <td>{crypto?.total_volume}</td>
        <td>{crypto?.price_change_percentage_24h}</td>
        <td>{crypto?.market_cap}</td>
      </tr>
    </>
  );
};

export default Crypto;
