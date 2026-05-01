
import ParticleBackground from './components/ParticleBackground';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import MemoriesSection from './components/MemoriesSection';
import WishSection from './components/WishSection';

function App() {
  return (
    <>
      <ParticleBackground />
      <main className="relative z-10 overflow-hidden">
        <HomeSection />
        <AboutSection />
        <MemoriesSection />
        <WishSection />
      </main>
    </>
  );
}

export default App;
