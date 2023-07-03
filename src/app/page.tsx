import { fetchApi } from "@/api";
import CryptoTable from "@/components/CryptoTable";

const Home = async () => {
  const data = await fetchApi();

  return (
    <main>
      <CryptoTable cryptoData={data} />
    </main>
  );
};

export default Home;
