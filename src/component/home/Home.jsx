import React from 'react';
import Head from '../head/Head';
import imgProfile from './../../assets/avataaars.svg';
import './home.css'

const Home = () => {
    return (
        <header className='bg-primary' >
            <div className='container text-white d-flex-center flex-column py-5 px-0' >
                <div className='img-profile'>
                    <img src={imgProfile} className='w-100' alt='Profile' />
                </div>

                <Head theme='light' text='start react' />

                <h2 className='fs-4 mt-5'>
                    Graphic Artist - Web Designer - Illustrator
                </h2>
            </div>
        </header>
    );
}

export default Home;
