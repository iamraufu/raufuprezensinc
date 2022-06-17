import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Capabilities from './Components/Capabilities/Capabilities';
import Clients from './Components/Clients/Clients';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ\'s/FAQ';
import Home from './Components/Homepage/Home/Home';
import News from './Components/News/News';
import Technology from './Components/Technology/Technology';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/technology' element={<Technology />} />
      <Route path='/capabilities' element={<Capabilities />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/news' element={<News />} />
      <Route path='/faqs' element={<FAQ />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
