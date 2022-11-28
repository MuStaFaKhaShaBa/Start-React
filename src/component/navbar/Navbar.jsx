import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary text-uppercase fw-bold">
                <div className="container py-2">
                    <Link className="navbar-brand fs-2" to="">Start React</Link>

                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <p className='mb-0 d-inline'>Menu</p>
                        <span className="navbar-toggler-icon ms-0 ms-md-2"></span>
                    </button>

                    <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 my-lg-0 mt-3">
                            <li className="nav-item my-2 my-lg-0">
                                <NavLink className={`nav-link py-2 px-3 rounded-2`} aria-current="page" to="">Home</NavLink>
                            </li>
                            <li className="nav-item my-2 my-lg-0">
                                <NavLink className={`nav-link py-2 px-3 rounded-2`} to="portfolio.html">Portfolio</NavLink>
                            </li>
                            <li className="nav-item my-2 my-lg-0">
                                <NavLink className={`nav-link py-2 px-3 rounded-2`} to="about.html">about</NavLink>
                            </li>
                            <li className="nav-item my-2 my-lg-0">
                                <NavLink className={`nav-link py-2 px-3 rounded-2`} to="contact.html">contact</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
