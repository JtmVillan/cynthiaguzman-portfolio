"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Form = () => {

    // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     const target = e.currentTarget;

    //     const name = target.elements.namedItem('name') as HTMLInputElement;
    //     const email = target.elements.namedItem('email') as HTMLInputElement;
    //     const message = target.elements.namedItem('message') as HTMLInputElement;

    //     const data = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value,
    //     };
        
    //     try {
    //         const response = await fetch('/api/contact/', {
    //             method: "POST",
    //             body: JSON.stringify(data),
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //         if(!response.ok) {
    //             throw new Error("HTTP Error! status: " + response.status);
    //         }

    //         const responseData = await response.json();
    //         console.log(responseData);
    //     } catch (error: any){ 
    //         console.log("There was a problem with the fetch operation " + error.message);
    //     }

    //     console.log(data);
    // };
    const [state, handleSubmit] = useForm("mzblqyla");
        if (state.succeeded) {
            return <div role="alert" className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Message sent!</span>
          </div>;
        }

    return (
        <form onSubmit={handleSubmit} className="p-2" action="https://formspree.io/f/mzblqyla" method="POST">
            <div className="mb-4">
                <label className="label-form" htmlFor="name">
                    Name
                </label>
                <input id="name" type="text" name="name" 
                className="input-form" required minLength={2} maxLength={200}/>
            </div>
            <div className="mb-4">
                <label className="label-form" htmlFor="email">
                    Email
                </label>
                <input id="email" type="email" name="email" 
                className="input-form" required minLength={2} maxLength={200}/>
            </div>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <div className="mb-4">
                <label className="label-form" htmlFor="message">
                    Message
                </label>
                <textarea name="message" id="message" className="input-form"
                required minLength={10} maxLength={1000}/>
            </div>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="btn-button"> Send Message </button>
        </form>
    )
};
