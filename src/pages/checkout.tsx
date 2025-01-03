import Footer from '../components/Footer';
import CheckoutForm from '../components/checkout';

const Checkout = () => {
  return (
    <main className="relative min-h-screen bg-ultra-dark-gray bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-ultra-dark-gray to-ultra-dark-gray">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 35, 126, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 35, 126, 0.15) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />
      <div className="relative">
        <CheckoutForm />
        <Footer />
      </div>
    </main>
  );
};

export default Checkout;