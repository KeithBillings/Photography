import Header from '../components/Header/Header';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <div id='home'>
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
