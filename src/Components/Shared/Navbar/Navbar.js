import React from 'react';
import logo from '../../../images/logo.png';
import navbarData from '../../../data/Navbar/navbarData.json';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{boxShadow: '0 2px 4px 0 rgb(0 0 0 / 8%)'}} className="navbar navbar-expand-lg sticky-top bg-white">

                <div className="container mt-3">

                    <Link style={{ fontSize: '18px', lineHeight: '24px', color: '#26252e', fontWeight: '400' }} className="navbar-brand" to="/">
                        <img src={logo} width={40} className='img-fluid me-2' alt="Logo of Raufu Prezens Inc." />Raufu Prezens Inc.</Link>

                    <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {
                                navbarData.map(item =>
                                    <li key={item.id} style={{ fontSize: '16px', lineHeight: '19px', color: '#26252e', fontWeight: '400' }} className="nav-item py-2">
                                        <NavLink 
                                        style={({isActive}) => ({
                                            color: isActive ? '#0b093a' : null,
                                            fontWeight: isActive ? '700' : null
                                        })}
                                        className="nav-link text-center" to={item.route}>{item.name}</NavLink>
                                    </li>
                                )}
                        </ul>
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;