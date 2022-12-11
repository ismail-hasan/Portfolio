import React from 'react';

const About = () => {
    const aboutData = [
        {
            id: 1,
            name: "ismail hasan",
            title: "MERN Stack Developer",
            dec: "hello my name is ismail hasan. I am web developer. I am Quick learner. My Expericence is Html "
        },
    ]
    console.log(aboutData)
    return (
        <section id='about' className='h-screen'>
            <div className='text-center'>
                <h1 className='text-[50px] lg:text-[85px] uppercase font-bold opacity-[0.08] tracking-[7px]'>about ME</h1>
                <h1 className='text-[40px] capitalize -mt-[50px] lg:-mt-[90px]'>about me</h1>
            </div>
            <div className='lg:flex lg:justify-between items-center h-[70vh]'>
                <div className=''>
                    <h1 className='text-lg mt-4 capitalize font-semibold'>introduction me</h1>
                    <h1 className='text-lg mt-4 capitalize font-semibold'>About me</h1>
                    <h1 className='text-lg mt-4 capitalize font-semibold'>My Expreience</h1>
                    <h1 className='text-lg mt-4 capitalize font-semibold'>my skills</h1>
                </div>
                <div>
                    {
                        aboutData.map((data) => {

                            const { name, dec, title } = data;
                            return (
                                <div key={data.id} className='mt-16 md:mt-0'>
                                    <h1 className='capitalize text-2xl font-semibold'>{name}</h1>
                                    <h1>{title}</h1>
                                    <h1>{dec}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    );
};

export default About;