import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import ScaleLoader from "react-spinners/ScaleLoader";


const HomePage = () => {
    const [loading, setLoading] = useState(false)
    let [color, setColor] = useState("#ffffff");
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 100);
    }, [])
    return (
        <div>
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

        </div>
    );
};

export default HomePage;