import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewCollection from '../components/NewCollection';
import BestSellers from '../components/BestSellers';
import SaleTimer from '../components/SaleTimer';
import ShopSize from '../components/ShopSize';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />

      <main className="flex-grow bg-white pb-32">
        <NewCollection />
        <BestSellers />
        <SaleTimer />
        <ShopSize />
      </main>

      <Footer />
    </div>
  );
}
