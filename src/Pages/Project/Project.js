import React from 'react';

const Project = ({ projectData }) => {
    const { name, img, dec } = projectData
    return (

        <div className='border border-3 bg-zinc-800 text-white border-zinc-400 rounded-md'>
            <img className='w-full' src={img} alt="" />
            <div className='px-5 py-5'>
                <h1 className='text-2xl capitalize'>{name}</h1>
                <p>{dec}</p>
            </div>
        </div>

    );
};

export default Project;