import React, { useState } from 'react';
import Head from '../head/Head';
import images from './../../assets/imgs/images';
import PopUp from './PopUp';
import './portfolio.css'

const Portfolio = () => {
    const [Data, setData] = useState({});

    const togglePopUp = _ => {
        window['pop-up'].classList.toggle('show');
        window['pop-up'].classList.toggle('hide');
    }

    return (
        <section id='portfolio' className='py-2'>

            {/* Pop Up */}
            <div id='pop-up' className='position-fixed d-flex-center top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 py-3 hide'
                onClick={togglePopUp}>
                <div className='container py-5'>
                    <PopUp data={Data} closeHandel={togglePopUp} />
                </div>
            </div>
            {/* Pop Up */}

            <Head theme="dark" text='Portfolio' />
            <div className='container my-5'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-0 gx-md-5 gy-5'>
                    {
                        images.map((el, index) => (
                            <div key={index}>
                                <div className='port-item' onClick={
                                    _ => {
                                        setData(el);
                                        togglePopUp();
                                    }}>
                                    <img src={el.src} className="w-100" alt='Cabin' />

                                    <div className='port-overlay bg-primary w-100 h-100 d-flex-center'>
                                        <i className='fas fa-plus fa-4x text-white' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
