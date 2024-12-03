import Hero from '../components/Hero';
import Objectives from '../components/FeacturesSectionDemo';
import Footer from '../components/Footer';
import ProgramStructure from '../components/ProgramStructure';
import RecentProjects from "../components/MissionVision"
import ContactForm from '../components/Contact';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <main className="relative bg-ultra-dark-gray flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        
      <Navbar/>
        <Hero />
        <RecentProjects />
        <Objectives />
        <ProgramStructure />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
