import ParticleBackground from './components/ParticleBackground';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import MemoriesSection from './components/MemoriesSection';
import SecretNoteSection from './components/SecretNoteSection';
import WishSection from './components/WishSection';

function App() {
  return (
    <>
      <ParticleBackground />
      <main className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <HomeSection />
        <AboutSection />
        <MemoriesSection />
        <SecretNoteSection />
        <WishSection />
      </main>
    </>
  );
}

export default App;
