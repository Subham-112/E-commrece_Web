import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

import LandingPage from './Landing-Page/Landing-page';

function App() {
  const [theme, setTheme] = useState(false);

  const handleThemeBtn = () => setTheme(!theme);

  useEffect(() => {
    document.body.style.backgroundColor = theme ? '#333' : '#ece5ce';
    document.body.style.color = theme ? '#ece5ce' : '#333';
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage themeBtn={handleThemeBtn} color={theme} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
