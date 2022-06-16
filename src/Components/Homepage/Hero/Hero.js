import React from 'react';
import './Hero.css';
import heroImage from '../../../images/hero.gif';
const Hero = () => {
    return (
        <section
            // style={{ backgroundColor: '#ecf1f2' }}
            className=''>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6 d-lg-none">
                        <img src={heroImage} className='hero-image' alt="Coding Animation" />
                    </div>
                    <div className="col-md-6">
                        <h1 className='hero-title'>High Quality Web App Services
                            <br />
                            For the Budget Conscious</h1>
                    </div>

                    <div className="col-md-6 d-none d-lg-block">
                        <img src={heroImage} className='hero-image' alt="Coding Animation" />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;