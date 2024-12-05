import Hero from '../components/Hero';
import Objectives from '../components/FeacturesSectionDemo';
import Footer from '../components/Footer';
import ProgramStructure from '../components/ProgramStructure';
import MissionVision from '../components/MissionVision';
import AccessContact from '../components/Contact';
import Benefits from '../components/beneficts';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <main className="relative bg-ultra-dark-gray flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        
      <Navbar/>
        <Hero />
        <Objectives />
        <MissionVision />
        <ProgramStructure />
        <Benefits/>
        <AccessContact />

        <Footer />
      </div>
    </main>
  );
};

export default Home;
