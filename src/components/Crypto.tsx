import Image from "next/image";
import { ICryptoProps } from "@/types";

const Crypto: React.FC<ICryptoProps> = ({ crypto }) => {
  const priceChangeColor =
    crypto?.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500";

  return (
    <tr className="hover cursor-pointer">
      <td className="flex items-center gap-3">
        <Image src={crypto?.image} alt={crypto?.name} width={30} height={30} />
        {crypto?.name}
      </td>
      <td>{crypto?.symbol.toUpperCase()}</td>
      <td>${crypto?.current_price}</td>
      <td>${crypto?.total_volume}</td>
      <td className={priceChangeColor}>
        {crypto?.price_change_percentage_24h}
      </td>
      <td>${crypto?.market_cap}</td>
    </tr>
  );
};

export default Crypto;
