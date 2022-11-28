import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
            <footer className='text-center bg-secondary text-white'>
                <div className='container py-5'>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 gy-lg-0 gx-0 gx-md-5'>
                        <div>
                            <div>
                                <h2 className='text-uppercase fw-bold mb-4'>
                                    Location
                                </h2>
                                <p className='fs-5'>
                                    2215 John Daniel Drive
                                    Clark, MO 65243
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className='text-uppercase fw-bold mb-4'>
                                    around the web
                                </h2>

                                <div className='social d-flex justify-content-center gap-4 align-items-center'>
                                    <a href='https://www.facebook.com' className='btn btn-outline-light d-flex-center rounded-circle' target='_blanket'>
                                        <i className='fa fa-brands fa-facebook-f fa-fw' />
                                    </a>
                                    <a href='https://www.twitter.com' className='btn btn-outline-light d-flex-center rounded-circle' target='_blanket'>
                                        <i className='fa fa-brands fa-twitter fa-fw' />
                                    </a>
                                    <a href='https://www.linkedin.com' className='btn btn-outline-light d-flex-center rounded-circle' target='_blanket'>
                                        <i className='fa fa-brands fa-linkedin-in fa-fw' />
                                    </a>
                                    <a href='https://www.dribbble.com' className='btn btn-outline-light d-flex-center rounded-circle' target='_blanket'>
                                        <i className='fa fa-brands fa-dribbble fa-fw' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2 className='text-uppercase fw-bold mb-4'>
                                    ABOUT FREELANCER
                                </h2>

                                <p className='lh-lg fs-5'>
                                    Freelance is a free to use,
                                    MIT licensed Bootstrap theme created by Route
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <p className='bg-dark text-white mb-0 py-4 fs-5'>
                    Copyright &copy; Your Website 2021
                </p>
            </footer>
        </>
    )
}

export default Footer
