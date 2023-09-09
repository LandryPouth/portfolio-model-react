import About from '../about/About';
import Hero from '../hero/Hero';
import Service from '../service-app/Service';
import Resume from '../resume/Resume';
import Portfolio from '../portfolio/Portfolio';
import Partners from '../partners/Partners';
import Testimonial from '../testimonial/Testimonial';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import { Routes, Route } from 'react-router-dom';

function HeaderRoutes() {
    return (
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/partners' element={<Partners />}/>
        <Route path='/testimonial' element={<Testimonial />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes> 
    )
}

export default HeaderRoutes