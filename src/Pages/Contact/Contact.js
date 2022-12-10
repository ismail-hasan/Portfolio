import React from 'react';

const Contact = () => {
    return (
        <div className=' mb-20'>
            <div className='text-center mb-20'>
                <h1 className='text-[85px] uppercase font-bold opacity-[0.08] tracking-[7px]'>contact</h1>
                <h1 className='text-[40px] capitalize -mt-[90px]'>Contact</h1>
            </div>
            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <h1 className='text-4xl font-semibold'>Get In Touch</h1>
                    <p className='text-lg py-4'>
                        Although I’m currently looking for Frontend Developer position opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                </div>
                <div className='w-1/3'>
                    <form action="">
                        <div className='flex gap-6'>
                            <input type="text" placeholder="First Name" className="w-full py-2 px-2 border-none outline-none text-black" />
                            <input type="text" placeholder="Last Name" className="w-full py-2 px-2 border-none outline-none text-black" />
                        </div>
                        <input type="text" placeholder="E-Mail Address" className="w-full py-2 px-2 border-none outline-none text-black mt-4" />
                        <textarea className='w-full h-48 py-2 px-2 border-none outline-none text-black mt-4' name="" id="" placeholder='Enter Your Massage' cols="5" rows="10"></textarea>
                        <button className='text-lg  border mt-5 border-white px-8 py-1'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;