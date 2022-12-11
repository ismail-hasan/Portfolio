import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import './Project.css'


const Project = ({ projectData }) => {
    const { name, img, dec } = projectData

    return (

        <div className='border border-3 bg-zinc-800 text-white border-zinc-400 rounded-md'>
            <div className='text-img'>
                <img className='' src={img} alt="" />
                <div className='text-overly'>
                    <div className='text-details'>
                        <BsGithub></BsGithub>
                        <AiFillEye></AiFillEye>
                        <AiFillEye></AiFillEye>
                    </div>
                </div>
            </div>
            <div className='px-5 py-5'>
                <h1 className='text-2xl capitalize'>{name}</h1>
                <p>{dec}</p>
            </div>
        </div>

    );
};

export default Project;