import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';

const HomePage = () => {
    return (
        <div>
            
            <Home></Home>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;