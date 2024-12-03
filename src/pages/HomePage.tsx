import Hero from '../components/Hero';
import { FeaturesSectionDemo } from '../components/FeacturesSectionDemo';
import Footer from '../components/Footer';
import { CompareDemo } from '../components/Approach';
import RecentProjects from "../components/RecentProjects"
import ContactForm from '../components/Contact';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <main className="relative bg-ultra-dark-gray flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        
      <Navbar/>
        <Hero />
        <RecentProjects />
        <FeaturesSectionDemo />
        <CompareDemo />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
