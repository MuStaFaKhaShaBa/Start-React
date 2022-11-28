import React from 'react'
import Head from '../head/Head'

function About() {
  return (
    <section className='bg-primary py-5' >
      <div className='container text-white d-flex-center flex-column px-0' >

        <Head theme='light' text='about' />

        <div className='d-flex flex-column flex-md-row min-w-75 gap-5 my-5 lead text-center text-md-start'>
          <div>
            <p>
              Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div>
            <p>
              You can create your own custom avatar for the masthead,
              change the icon in the dividers,
              and add your email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
