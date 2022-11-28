import React, { useRef, useState } from 'react';
import Head from '../head/Head';
import PopUp from '../portfolio/PopUp';
import Input from './Input';

const Contact = () => {
    const NameRef = useRef(null);
    const EmailRef = useRef(null);
    const PhoneRef = useRef(null);
    const MsgRef = useRef(null);
    const [SuccessMsg, setSuccessMsg] = useState(false);

    const HandleSubmit = e => {
        e.preventDefault();
        let isValidForm = !0;

        // check Name Field Validation
        if (!NameRef.current.checkValidation()) {
            isValidForm = !1;
            NameRef.current.addEventListenerInput(); // add event to check in every type character
        }

        // check Email Field Validation
        if (!EmailRef.current.checkValidation()) {
            isValidForm = !1;
            EmailRef.current.addEventListenerInput(); // add event to check in every type character
        }

        // check Phone Field Validation
        if (!PhoneRef.current.checkValidation()) {
            isValidForm = !1;
            PhoneRef.current.addEventListenerInput(); // add event to check in every type character
        }

        // check Message Field Validation
        if (!MsgRef.current.checkValidation()) {
            isValidForm = !1;
            MsgRef.current.addEventListenerInput(); // add event to check in every type character
        }

        if (isValidForm) {
            setSuccessMsg(true);
        }
    }
    const resetFields = _ => {
        NameRef.current.resetField();
        EmailRef.current.resetField();
        PhoneRef.current.resetField();
        MsgRef.current.resetField();
    }

    const togglePopUp = _ => {
        setSuccessMsg(false);
    }

    return (
        <section id='contact' className='py-5'>
            {// Send Success Message |=> Show Pop Up 
                SuccessMsg && (

                    <div id='pop-up' className='position-fixed d-flex-center top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 py-3 hide'
                        onClick={togglePopUp}>
                        <div className='container py-5'>
                            <PopUp data={{ head: 'Connected To Us', desc: 'You are successfully send message' }} closeHandel={togglePopUp} />
                        </div>
                    </div>

                )
            }

            <div className='container'>
                <Head text='Contact me' theme='dark' mt='mt-0' />

                <form className='mt-5 min-w-75 mx-auto'>

                    <Input ref={NameRef} regex={/([^\w\s.]|[0-9])/}
                        placeholder='____ ___ ___' id='user-name'
                        type='text' name='userName' label='Name' />

                    <Input ref={EmailRef} regex={/^([a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,})$/}
                        placeholder='name@example.com' id='user-email'
                        type='email' name='userEmail' label='Email Address' />

                    <Input ref={PhoneRef} regex={/^\d{11}$/}
                        placeholder='10 0000 0000' id='user-phone'
                        type='tel' name='userPhone' label='Phone Number' />

                    <Input ref={MsgRef} isTextarea={true}
                        placeholder='Leave a comment here' id='user-message'
                        name='userMessage' label='Your Message' />

                    <button type='submit' onClick={HandleSubmit} className='btn btn-primary py-2 px-3 fs-5 mt-4'>Send</button>
                    <button type='reset' onClick={resetFields} className='btn btn-danger py-2 px-3 fs-5 mt-4 ms-3'>reset</button>

                </form>
            </div>
        </section >
    );
}

export default Contact;
