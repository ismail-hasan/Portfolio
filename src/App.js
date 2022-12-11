import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './Pages/Navbar/Navbar';
import Portfolio from './Pages/Portfolio/Portfolio';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <HomePage></HomePage>
  //   }
  // ])
  return (
    <div className='px-[70px]'>

      {/* <RouterProvider router={router}></RouterProvider> */}

      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
