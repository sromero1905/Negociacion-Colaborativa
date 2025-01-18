import Footer from '../components/Footer';
import CheckoutForm from '../components/checkout';

const Checkout = () => {
  return (
    <main className="relative min-h-screen bg-ultra-dark-gray bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-ultra-dark-gray to-ultra-dark-gray">
      
     
        <CheckoutForm />
        <Footer />
    </main>
  );
};

export default Checkout;