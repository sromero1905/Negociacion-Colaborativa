import Footer from '../components/Footer';
import ContactForm from '../components/pageContact';
import Navbar from '../components/Navbar';
import ContactHero from '../components/contacthero';
const Contact = () => {
  return (
    <main className="relative bg-gray-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
      <Navbar/>
      <ContactHero/>
      <ContactForm/>
      <Footer/>
      </div>
    </main>
  );
};

export default Contact;
