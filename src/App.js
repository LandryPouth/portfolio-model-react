import './App.css';
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About';
import Service from './components/service-app/Service';
import Resume from './components/resume/Resume';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Resume />
    </>
  );
}

export default App;
