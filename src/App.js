import './App.css';
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About';
import Service from './components/service-app/Service';
import Resume from './components/resume/Resume';
import Testimonial from './components/testimonial/Testimonial';
import Portfolio from './components/portfolio/Portfolio';
import Partners from './components/partners/Partners';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

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
      <Partners />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
