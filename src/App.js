import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Works } from './components/Works/Works';
import { Cards } from './components/Cards/Cards';
import { Animation } from './components/Animation/Animation';
import { MiddlePage } from './components/MiddlePage/MiddlePage';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Works />
      <Animation />
      <MiddlePage />
      <Cards />
      <Footer />
    </>
  );

}

export default App;
