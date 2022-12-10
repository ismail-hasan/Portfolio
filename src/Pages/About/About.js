import React from 'react';

const About = () => {
    const aboutData = [
        {
            name: "ismail hasan",
            title: "MERN Stack Developer",
            dec: "hello my name is ismail hasan. I am web developer. I am Quick learner. My Expericence is Html "
        },
    ]

    return (
        <div className='h-screen'>
            <div className='text-center'>
                <h1 className='text-[85px] uppercase font-bold opacity-[0.08] tracking-[7px]'>about ME</h1>
                <h1 className='text-[40px] capitalize -mt-[90px]'>about me</h1>
            </div>
            <div className='flex justify-between items-center h-[70vh]'>
                <div>
                    <h1 className='text-lg mt-4 capitalize font-semibold'>introduction me</h1>
                    <h1 className='text-lg mt-4 capitalize font-semibold'>About me</h1>
                    <h1 className='text-lg mt-4 capitalize font-semibold'>My Expreience</h1>
                    <h1 className='text-lg mt-4 capitalize font-semibold'>my skills</h1>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default About;