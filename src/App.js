import './App.css';
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About';
import Service from './components/service-app/Service';
import Resume from './components/resume/Resume';
import Testimonial from './components/testimonial/Testimonial';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Resume />
      <Testimonial />
      <Portfolio />
    </>
  );
}

export default App;
