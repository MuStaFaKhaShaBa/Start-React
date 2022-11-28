import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const Path = window.location.pathname,
        pageTitle = Path.split('').splice(1, Path.indexOf('.') - 1).join("") || 'home';



    const [activeLink, setActiveLink] = useState(pageTitle);

    useEffect(() => {
        console.log('re');
        window.document.title = activeLink;

    }, [activeLink]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary text-uppercase fw-bold">
                <div className="container py-2">
                    <Link className="navbar-brand fs-2" to="">Start React</Link>

                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <p className='mb-0 d-inline'>Menu</p>
                        <span className="navbar-toggler-icon ms-0 ms-md-2"></span>
                    </button>

                    <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 my-lg-0 mt-3">
                            <li className="nav-item my-2 my-lg-0">
                                <Link className={`nav-link py-2 px-3 rounded-2 ${activeLink === 'home' && 'active'}`} aria-current="page" onClick={_ => setActiveLink('home')} to="">Home</Link>
                            </li>
                            <li className="nav-item my-2 my-lg-0">
                                <Link className={`nav-link py-2 px-3 rounded-2 ${activeLink === 'portfolio' && 'active'}`} onClick={_ => setActiveLink('portfolio')} to="portfolio.html">Portfolio</Link>
                            </li>
                            <li className="nav-item my-2 my-lg-0">
                                <Link className={`nav-link py-2 px-3 rounded-2 ${activeLink === 'about' && 'active'}`} onClick={_ => setActiveLink('about')} to="about.html">about</Link>
                            </li>
                            <li className="nav-item my-2 my-lg-0">
                                <Link className={`nav-link py-2 px-3 rounded-2 ${activeLink === 'contact' && 'active'}`} onClick={_ => setActiveLink('contact')} to="contact.html">contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
