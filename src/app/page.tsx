import { fetchApi } from "@/api";
import CryptoTable from "@/components/CryptoTable";

const Home = async () => {
  const data = await fetchApi();

  return (
    <main className="p-5">
      <h1 className="text-center font-semibold text-2xl">Crypto Tracker</h1>
      <CryptoTable cryptoData={data} />
    </main>
  );
};

export default Home;
