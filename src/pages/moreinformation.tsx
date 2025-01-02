import Footer from '../components/Footer';
import ContentLanding from '../components/Contenido';
import ModalOpen from '../components/modal';
import Navbar from '../components/Navbar';
import ModernLearningSection from '../components/Content2';
const MoreInfo = () => {
  return (
    <main className="relative bg-[#0A0A0A] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        
        <Navbar/>
      <ContentLanding/>
      <ModalOpen/>
      <ModernLearningSection/>
      <Footer/>
      </div>
    </main>
  );
};

export default MoreInfo;
