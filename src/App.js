import { useEffect, useState } from 'react';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Portfolio from './Pages/Portfolio/Portfolio';
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  return (
    <div className='px-[70px]'>

      {
        loading ?
          <div className='App'>
            <ScaleLoader
              color={color}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />

          </div>
          :
          <>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
          </>
      }

    </div >
  );
}

export default App;
