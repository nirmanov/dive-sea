import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Slider } from './components/Slider/Slider';
import { ArtworkSection } from './components/ArtworkSection/ArtworkSection';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Hero />
        <Slider />
        <ArtworkSection />
        <Footer />
      </>
    </Router>
  );
}

export default App;
