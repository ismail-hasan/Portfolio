import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

const Home = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Md Ismail Hossain MERN Stack Resume (3).pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Md Ismail Hasan Resume';
                alink.click();
            })
        })
    }
    return (

        <section id='home' className='lg:flex h-screen items-center gap-14 '>
            <div className='w-full lg:w-[60%]'>
                <p className='text-[20px]'>Hi, my name is</p>
                <h1 className='text-3xl lg:text-6xl font-bold py-3 '>Md Ismail Hossain</h1>
                <h1 className='text-3xl mb-3'>Frontend Developer.</h1>
                <p className='text-[18px]'>
                    I am a passionate web developer and am always eager to learn different technologies related to web development. I love to take on challenges and always try to fulfill my responsibilities.
                </p>
                <button onClick={onButtonClick} className='border border-5 border-zinc-600 px-10 mt-7 capitalize text-lg py-3 flex justify-around items-center' >
                    <AiOutlineFilePdf></AiOutlineFilePdf>
                    <p className="ml-3 capitalize" >dawnload resume</p>
                </button>
            </div>
            <div className='mt-10 md:mt-0'>
                <img className='rounded-full w-64 h-64' src='https://media.istockphoto.com/id/1204374053/photo/profile-side-view-portrait-of-his-he-nice-attractive-skilled-focused-serious-guy-writing.jpg?s=612x612&w=0&k=20&c=ohF7qYstx9E6eJXpcQUtxFJCx9jjRBHilXcFehoOGyU=' alt="Md Ismail Hossain" />
            </div>
            <div className='fixed flex flex-col right-3 gap-3 bg-[rgba(0,0,0,.3)] px-2 py-5 rounded-3xl'>
                <a href="#home">  <FaHome className='text-[16px] text-white'></FaHome></a>
                <a href="#about">  <FaHome className='text-[16px] text-white'></FaHome></a>
                <a href="#project">  <FaHome className='text-[16px] text-white'></FaHome></a>
                <a href="#testimonial">  <FaHome className='text-[16px] text-white'></FaHome></a>
                <a href="#blog">  <FaHome className='text-[16px] text-white'></FaHome></a>
                <a href="#contact">  <FaHome className='text-[16px] text-white'></FaHome></a>

            </div>
        </section>

    );
};

export default Home;