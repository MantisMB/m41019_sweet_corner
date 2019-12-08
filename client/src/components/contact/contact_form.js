import React from 'react';
import './contact.scss';
import { Field, reduxForm } from 'redux-form';
import CustomInput from './CustomInput'

const Form = props => {

    // console.log(props)

    const handleFormSubmit = (formValues) => {
        // When your submit handler is called by redux form
        // you are passed all the form values
        // console.log('On Submit Simple Form Values:', formValues);
    }
 


    const { handleSubmit } = props

    return (
        <div className="contact">
            <h2>Contact Form</h2>
               {/*
                   Here we pass what function we want to be called
                   when the form is submitted as a callback to
                   handleSubmit. handleSubmit comes from reduxForm
               */}
               <form onSubmit={handleSubmit(handleFormSubmit)} >
                        <div className="input-field">
                            <Field 
                                name="name"
                                className="name"
                                placeholder="Name"
                                component={CustomInput} 
                                required
                            />
                        </div>
                        <div className="input-field">
                            <Field 
                                name="email"
                                className="email"
                                placeholder="Email" 
                                component={CustomInput} 
                                autoComplete="email" 
                                required
                            />
                        </div>
                        <div className="input-field">
                            <Field 
                                name="phone"
                                className="phone"
                                placeholder="Phone"
                                component={CustomInput} 
                                type="phone" 
                                autoComplete="phone"
                                required 
                            />
                        </div>
                        <div className="input-field">
                            <Field 
                                name="subject"
                                className="subject"
                                placeholder="Subject"
                                component={CustomInput} 
                                type="subject" 
                                autoComplete="subject"
                                required 
                                />
                        </div>
                        <div className="input-field">
                            <Field 
                                name="message"
                                className="message"
                                placeholder="Message"
                                component={CustomInput} 
                                type="textarea" 
                                autoComplete="message"
                                />
                        </div>
                        <div className="form-actions ">
                            <button className="btn-send">SEND</button>
                        </div>
               </form>
        </div>
    )
}

function validate(formValues) {
   const { name, email, phone, subject, message } = formValues;
   const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   const errors = {};

   if (!name) {
       errors.name = '*Please enter your name';
   } else if (name.length < 2) {
       errors.name = '*Name must be at least 2 characters long';
   }


   if (!email) {
       errors.email = '*Please enter your email';
   } else if (!emailRegEx.test(email)) {
       errors.email = '*Please enter a valid email address. Example: me@example.com';
   }


   if (!phone) {
       errors.phone = '*Please choose a phone number';
   } else if (phone.length < 10) {
       errors.phone = '*Please enter a valid phone number';
   }


   if (!subject) {
    errors.subject = '*Please enter a subject';
} else if (subject.length < 2) {
    errors.subject = '*Please enter a subject longer that two letters';
}

if (!message) {
    errors.message = '*Please enter a message';
} else if (subject.length > 1000) {
    errors.subject = '*Message is too long';
}


   return errors;
}


export default reduxForm({form: 'Form', validate})(Form)