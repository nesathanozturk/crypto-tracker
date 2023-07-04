import { fetchApi } from "@/api";
import CryptoTable from "@/components/CryptoTable";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home = async () => {
  const data = await fetchApi();

  return (
    <main className="py-5">
      <Header />
      <CryptoTable cryptoData={data} />
      <Footer />
    </main>
  );
};

export default Home;
