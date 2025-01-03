import Footer from '../components/Footer';
import CheckoutForm from '../components/checkout';

const Checkout = () => {
  return (
    <main className="relative bg-gray-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
      <CheckoutForm/>
      <Footer/>
      </div>
    </main>
  );
};

export default Checkout;
