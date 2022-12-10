import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m0931zi', 'template_0owsvpt', form.current, 'y3g9bfBkWEDfokU0_')
            .then((result) => {
                if (result.text) {
                    alert('message sent')
                }
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className=' mb-20'>
            <div className='text-center mb-20'>
                <h1 className='text-[52px] lg:text-[85px] uppercase font-bold opacity-[0.08] tracking-[7px]'>contact</h1>
                <h1 className='text-[40px] capitalize  -mt-[50px] lg:-mt-[90px]'>Contact</h1>
            </div>
            <div className='lg:flex justify-between'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-4xl font-semibold'>Get In Touch</h1>
                    <p className='text-lg py-4'>
                        Although I’m currently looking for Frontend Developer position opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                </div>
                <div className='w-full lg:w-1/3'>
                    <form action="" ref={form} onSubmit={sendEmail}>
                        <div className='flex gap-6'>
                            <input name="user_name" type="text" placeholder="First Name" className="w-full py-2 px-2 border-none outline-none text-black" />
                            <input type="text" placeholder="Last Name" className="w-full py-2 px-2 border-none outline-none text-black" />
                        </div>
                        <input name="user_email" type="text" placeholder="E-Mail Address" className="w-full py-2 px-2 border-none outline-none text-black mt-4" />
                        <textarea name="message" className='w-full h-48 py-2 px-2 border-none outline-none text-black mt-4' id="" placeholder='Enter Your Massage' cols="5" rows="10"></textarea>
                        <button value="Send" className='text-lg  border mt-5 border-white px-8 py-1'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;