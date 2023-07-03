import { fetchApi } from "@/api";
import CryptoTable from "@/components/CryptoTable";
import Header from "@/components/Header";

const Home = async () => {
  const data = await fetchApi();

  return (
    <main className="p-5">
      <Header />
      <CryptoTable cryptoData={data} />
    </main>
  );
};

export default Home;
