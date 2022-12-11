import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const detailsData = useLoaderData()
    console.log(detailsData)
    const { name, img, dec, featchers } = detailsData
    return (
        <div>
            <div className='my-20 mx-auto w-[60%]'>
                <img src={img} className="rounded-md w-full mb-3" alt="" />

                <div className='py-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[27px] capitalize'>Project Name: {name}</h1>
                        <div>
                            <a className='text-black bg-white px-3 py-1 rounded-2xl text-[14px] font-semibold mr-3' href="">live link</a>
                            <a className='text-black bg-white px-3 py-1 rounded-2xl text-[14px] font-semibold mr-3' href="">client site</a>
                            <a className='text-black bg-white px-3 py-1 rounded-2xl text-[14px] font-semibold mr-3' href="">server site</a>
                        </div>
                    </div>
                    <p className='text-lg py-3'>{dec}</p>
                    <p className='text-3xl mb-4 mt-5 text-blue-600 font-semibold'>Fetcher Of This Website :</p>
                    {
                        featchers.map((fetcher, idx) => <ul className='' key={idx}>
                            <li className='list-disc ml-10 text-lg my-1'>{fetcher}</li>
                        </ul>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;