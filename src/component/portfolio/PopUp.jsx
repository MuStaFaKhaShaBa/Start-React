import React from 'react';
import Head from '../head/Head';

const PopUp = ({ data: { head, src = null, desc }, closeHandel }) => {
    return (
        <div className='bg-white min-w-75 mx-auto border-r-5rem position-relative py-2 text-center'
            onClick={e => e.stopPropagation()}>
            <span className='close-popUp' onClick={closeHandel}>
                <i className='fa fa-xmark text-primary fa-2x position-absolute top-0 end-0 pe-3 pt-3' />
            </span>

            <Head theme='dark' text={head} mt='mt-4' />

            {// show img if we provide src attr
                src && 
                (<div className='border-r-5rem mt-4 w-50 mx-auto'>
                    <img src={src} className="w-100" alt={head} />
                </div>)
            }

            <p className='mt-4 w-75 mx-auto'>
                {desc}
            </p>

            <button type='button' className='btn btn-primary text-white my-2 mb-4' onClick={closeHandel}>
                <i className='fa fa-xmark me-2' />
                Close Window
            </button>
        </div>
    );
}

export default PopUp;
