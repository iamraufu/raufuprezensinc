import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Hero from '../Hero/Hero';
import './Home.css';

const Home = () => {
    return (
        <section className='homepage'>
                <Navbar />
                <Hero />
        </section>
    );
};

export default Home;