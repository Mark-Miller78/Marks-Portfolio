import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm (){
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('Please enter a valid email address');
            } else{
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        };

        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value})
        };
    };


    return (
        <section className="contact">
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id='contact-form'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>    
                    )}
                </div>
                <button type="submit" data-testid="btntag">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;

