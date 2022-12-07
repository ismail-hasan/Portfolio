import React from 'react';
import Project from '../Project/Project';

const Portfolio = () => {
    const portfolioData = [
        {
            id: 1,
            img: "https://www.dreamhost.com/academy/wp-content/uploads/2020/11/what-makes-a-good-website-750x498.jpg",
            name: 'doctor portal',
            dec: "this is a amazine website "
        },
        {
            id: 2,
            img: "https://www.dreamhost.com/academy/wp-content/uploads/2020/11/what-makes-a-good-website-750x498.jpg",
            name: 'doctor portal',
            dec: "this is a amazine website "
        },
        {
            id: 3,
            img: "https://www.dreamhost.com/academy/wp-content/uploads/2020/11/what-makes-a-good-website-750x498.jpg",
            name: 'doctor portal',
            dec: "this is a amazine website "
        },
        {
            id: 4,
            img: "https://www.dreamhost.com/academy/wp-content/uploads/2020/11/what-makes-a-good-website-750x498.jpg",
            name: 'doctor portal',
            dec: "this is a amazine website "
        },
    ]
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-7xl uppercase font-bold'>portfolio</h1>
                <h1 className='text-3xl capitalize '>portfolio</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
            <div className='grid grid-cols-5 gap-10 mt-10 items-center'>
                <div className='col-span-2 flex flex-col gap-7 justify-center items-center'>
                    <h1 className='text-lg '>Lorem, ipsum dolor.</h1>
                    <h1 className='text-lg '>Lorem, ipsum dolor.</h1>
                    <h1 className='text-lg '>Lorem, ipsum dolor.</h1>
                </div>
                <div className='grid col-span-3 grid-cols-3 gap-10'>
                    {
                        portfolioData.map(projectData => <Project
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