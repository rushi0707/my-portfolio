import {BrowserRouter,} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Tech from './components/Tech'
import Works from './components/Work'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
       <About />
       <Education />
       <Works />
       <Tech />
       
      <Footer/>
  
    </div>
  </BrowserRouter>
  );
}

export default App;
