import { fetchApi } from "@/api";
import CryptoTable from "@/components/CryptoTable";

const Home = async () => {
  const data = await fetchApi();

  return (
    <>
      <h1>Crypto Tracker</h1>
      <CryptoTable cryptoData={data} />
    </>
  );
};

export default Home;
