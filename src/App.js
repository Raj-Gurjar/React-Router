import { Routers, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Parent from './components/Parent';


function App() {
  return (

    <div className="App">

      <Navbar />
      {/* <Router> */}
      <Routes>
        <Route path='/' element={<Parent />} >  

          <Route index element={<Home />} />    
          {/* //! This is a default Route */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<div>404 Site Not found</div>} />
          {/* //! This is the wildcard route that matches any path that hasn't been matched by the previous routes. */}

        </Route>
      </Routes>

      {/* </Router> */}
    </div>
  );
}

export default App;
