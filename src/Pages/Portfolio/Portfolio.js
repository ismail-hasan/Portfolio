import React, { useState } from 'react';
import Project from '../Project/Project';

const Portfolio = () => {
    const portfolioData = [
        {
            id: 1,
            img: "https://www.dreamhost.com/academy/wp-content/uploads/2020/11/what-makes-a-good-website-750x498.jpg",
            name: 'doctor portal',
            catagory: "bussiness",
            dec: "this is a amazine website "
        },
        {
            id: 2,
            img: "https://i.ibb.co/qdsRRwj/pexels-john-tekeridis-249541.jpg",
            name: 'isk photography',
            catagory: "bussiness",
            dec: "this is a amazine website "
        },
        {
            id: 3,
            img: "https://wallpaperaccess.com/full/1657894.jpg",
            name: 'dragon portal',
            catagory: "portfolio",
            dec: "this is a amazine website "
        },
        {
            id: 4,
            img: "https://i.ibb.co/fkpFMZQ/pexels-veeterzy-303383.jpg",
            name: 're-commerce',
            catagory: "E-commerce",
            dec: "this is a amazine website "
        },
    ]
    const [data, setData] = useState(portfolioData)

    const filterResult = cardItem => {
        const result = portfolioData.filter(item => {
            return item.catagory === cardItem
        })
        setData(result)

    }

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-[50px] lg:text-[85px] uppercase font-bold opacity-[0.08] tracking-[7px]'>portfolio</h1>
                <h1 className='text-[40px] capitalize -mt-[50px] lg:-mt-[90px]'>portfolio</h1>
                <p className='text-lg  w-full md:w-1/2 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quo eaque nesciunt tempora culpa officia?</p>
            </div>
            <div className='grid grid-cols-5 gap-10 mt-16 mb-24'>

                <div className='w-full col-span-5 lg:col-span-1 flex flex-col gap-7'>
                    <button onClick={() => setData(portfolioData)} className='text-lg '>All Projects</button>
                    <button onClick={() => filterResult('bussiness')} className='text-lg '>Portfolio</button>

                    <button onClick={() => filterResult('portfolio')} className='text-lg '>bussiness</button>

                    <button onClick={() => filterResult('E-commerce')} className='text-lg '>E-Commerce</button>

                </div>
                <div className='grid grid-cols-1 col-span-5 lg:col-span-4 lg:grid-cols-3 gap-10'>
                    {
                        data.map(projectData => <Project
                            key={projectData.id}
                            projectData={projectData}
                        ></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;