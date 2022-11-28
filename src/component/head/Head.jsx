import React from 'react'
import './head.css'

function Head({ theme,text,mt='mt-5' }) {
    return (
        <div className={`text-center ${mt} ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
            <h1 className={`header-text text-uppercase fw-bolder ${theme === 'dark' ? 'text-secondary' : 'text-white'}`}>
                {text}
            </h1>

            <div className='divider mt-3'>
                <i className={`fas fa-star fa-2x ${theme === 'dark' ? 'text-secondary' : 'text-white'}`}></i>
            </div>
        </div>
    )
}

export default Head
