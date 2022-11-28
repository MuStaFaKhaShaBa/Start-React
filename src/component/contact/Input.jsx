import React, { forwardRef, useState, useImperativeHandle, useRef } from 'react';
import style from './contact.module.css'

const Input = forwardRef(({ placeholder, type, name, id, label, regex, isTextarea = false }, ref) => {
    const inputRef = useRef(null);
    const [InvalidMsg, setInvalidMsg] = useState('');
    const [iValue, setiValue] = useState('');
    const [ValidInput, setValidInput] = useState(true);


    const putInvalidMood = msg => {
        setInvalidMsg(msg)
        setValidInput(!1);
    }

    useImperativeHandle(ref, _ => ({

        emailVaildation(val) {
            // check field empty
            if (val.length === 0) {
                putInvalidMood(`Please Enter Your Email Address`)
                return !1;
            }
            // Check If Email Has Special or Capitalize Letter
            // eslint-disable-next-line no-useless-escape
            if (/[^a-z0-9_@\.]/g.test(val)) {
                putInvalidMood(`Email Contain Special Or Capital Letters`);
                return !1;
            }
            // Check Regex Validation
            if (!(/^([a-z0-9._]+@[a-z0-9.]+\.[a-z]{2,})$/.test(val))) {
                putInvalidMood(`Please Enter a Valid Email, EX: abc5@abc1.abc`);
                return !1;
            }

            return !0;
        },
        nameVaildation(val) {
            // check field empty
            if (val.length === 0) {
                putInvalidMood(`Please Enter Your Name`);
                return !1;
            }
            // Check Regex Validation
            if (regex.test(val)) {
                putInvalidMood(`Please Enter Valid, Name Must not be have Numbers Or Special Letter.`);
                return !1;
            }
            // check form of Name => Must Have Two Part At Least
            if (val.split(' ').length < 2) {
                putInvalidMood(`Name Must be in Form of Two Parts, EX:--- ---`);
                return !1;
            }

            return !0;
        },
        phoneVaildation(val) {
            // check field empty
            if (val.length === 0) {
                putInvalidMood(`Please Enter Your Phone Number`);
                return !1;
            }
            // check Phone Number => 11-Digit
            if (!/^\d{11}$/.test(val)) {
                putInvalidMood('Enter Valid Phone Number: 11 Numbers. Ex: 01xxxxxxxxx');
                return !1;
            }
            // check if first number is 1 or not
            if (!val.startsWith('01')) {
                putInvalidMood('Phone Number Must Start With 01');
                return !1;
            }

            return !0;
        },
        messagValidation(val) {
            // check field empty
            if (val.length === 0) {
                putInvalidMood(`Please Enter Your Message`);
                return !1;
            }
            // Check Remainder Letter
            if (val.length < 100) {
                putInvalidMood(`Your Message Must Be At Least 100-Letter, Remainder: ${100 - val.length}`);
                return !1;
            }

            return !0;
        }
        ,
        addEventListenerInput() {
            inputRef.current.addEventListener('input', e => {
                const Val = e.target.value;
                setiValue(prevV => Val)
                this.checkValidation(Val);
            })
        },
        checkValidation() {
            const Val = inputRef.current.value.trim();

            // Validate User Name
            if (name === 'userName') {
                // if returned value is false ==> Return False
                // if returned value is True ==> Complete The Code
                if (!this.nameVaildation(Val)) {
                    return !1;
                }
            }
            // Validate User Email
            if (name === 'userEmail') {
                // if returned value is false ==> Return False
                // if returned value is True ==> Complete The Code
                if (!this.emailVaildation(Val)) {
                    return !1;
                }
            }
            // Validate User Phone
            if (name === 'userPhone') {
                // if returned value is false ==> Return False
                // if returned value is True ==> Complete The Code
                if (!this.phoneVaildation(Val)) {
                    return !1;
                }
            }
            // Validate User Phone
            if (name === 'userMessage') {
                // if returned value is false ==> Return False
                // if returned value is True ==> Complete The Code
                if (!this.messagValidation(Val)) {
                    return !1;
                }
            }

            setValidInput(true);
            return true;
        },
        resetField() {
            setiValue('');
            setInvalidMsg('')
        }
    }), [regex, name])

    const handleInputChange = _ => {
        setiValue(prevVal => inputRef.current.value);
    }

    const InputAttr = { // To Reduce duplicate Code
        className: `form-control border-0 border-bottom border-2 shadow-none ${style['textarea-height']}
                        ${style['input']} ${ValidInput ? ((InvalidMsg !== '') && 'is-valid') : 'is-invalid'}`,
        id: id,
        ref: inputRef,
        value: iValue,
        name: name,
        onChange: handleInputChange,
        placeholder: placeholder,
    }

    return (
        <div className="form-floating mb-3 border-0">
            {isTextarea ? (<textarea
                type='text'
                {...InputAttr}
            />) : (<input
                type={type}
                {...InputAttr}
            />)}

            <label htmlFor={id} className='text-secondary fs-5'>{label}</label>

            <div className='invalid-feedback'>
                <p className='d-flex align-items-center gap-2'>
                    <span className={`bg-danger rounded-circle ${style['dot']}`} />{InvalidMsg}
                </p>
            </div>
        </div>
    );
})

export default Input;
