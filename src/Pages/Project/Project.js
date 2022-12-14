import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { motion } from "framer-motion"

import './Project.css'
import { Link } from 'react-router-dom';


const Project = ({ projectData }) => {
    const { name, img, dec, _id, liveLink, github } = projectData

    return (

        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}

            className='border border-3 bg-zinc-800 text-white border-zinc-400 rounded-md'>
            <div className='text-img'>
                <img className='h-[210px] w-full' src={img} alt="" />
                <div className='text-overly'>
                    <div className='text-details'>
                        <a _blank href={github}>
                            <BsGithub></BsGithub>
                        </a>
                        <a href={liveLink}>
                            <AiFillEye></AiFillEye>
                        </a>
                        <Link to={`/project/${_id}`}>
                            <FaRegEdit></FaRegEdit>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='px-5 py-5'>
                <h1 className='text-2xl capitalize'>{name}</h1>
                <p>{dec}</p>
            </div>
        </motion.div>

    );
};

export default Project;