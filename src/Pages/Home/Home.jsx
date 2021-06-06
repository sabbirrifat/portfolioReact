import React from 'react'
import About from '../../Components/About';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import MainBanner from '../../Components/MainBanner';
import Navbar from '../../Components/Navbar';
import Skills from '../../Components/Skills';
import Works from '../../Components/Work/Works';

const Home = () => {
    return (
        <>
           <Navbar />
           <MainBanner />
           <About />
           <Skills />
           <Works />
           <Contact />
           <Footer />
        </>
    )
}

export default Home
