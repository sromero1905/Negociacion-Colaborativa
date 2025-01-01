import Footer from '../components/Footer';
import PricingHero from '../components/pricinghero';
import FAQ from '../components/faq';
import Guarantee from '../components/guarantee';
import Navbar from '../components/Navbar';
const Pricing = () => {
  return (
    <main className="relative bg-gray-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
      <Navbar/>
      <PricingHero/>
        <Guarantee/>
        <FAQ/>
      <Footer/>
      </div>
    </main>
  );
};

export default Pricing;
