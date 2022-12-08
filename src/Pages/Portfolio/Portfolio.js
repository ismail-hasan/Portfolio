import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            img: "https://www.dreamhost.com/academy/wp-content/uploads/2020/11/what-makes-a-good-website-750x498.jpg",
            name: 'doctor portal',
            catagory: "bussiness",
            dec: "this is a amazine website "
        },
        {
            id: 3,
            img: "https://www.dreamhost.com/academy/wp-content/uploads/2020/11/what-makes-a-good-website-750x498.jpg",
            name: 'doctor portal',
            catagory: "portfolio",
            dec: "this is a amazine website "
        },
        {
            id: 4,
            img: "https://www.dreamhost.com/academy/wp-content/uploads/2020/11/what-makes-a-good-website-750x498.jpg",
            name: 'doctor portal',
            catagory: "E-commerce",
            dec: "this is a amazine website "
        },
    ]
    const [data, setData] = useState(portfolioData)
    // console.log(portfolioData)

    const filterResult = cardItem => {
        const result = portfolioData.filter(item => {
            return item.catagory === cardItem
        })
        setData(result)
        // console.log('gf', result)

    }

    // const [portfolioData, setPortfolioData] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/allproject')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setPortfolioData(data)
    //         })
    // }, [])


    return (
        <div>
            <div className='text-center'>
                <h1 className='text-7xl uppercase font-bold'>portfolio</h1>
                <h1 className='text-3xl capitalize '>portfolio</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
            <div className='grid grid-cols-5 gap-10 mt-10 items-center'>
                <div className='col-span-2 flex flex-col gap-7 justify-center items-center'>



                    <button onClick={() => setData(portfolioData)} className='text-lg '>All Projects</button>
                    <button onClick={() => filterResult('bussiness')} className='text-lg '>Portfolio</button>

                    <button onClick={() => filterResult('portfolio')} className='text-lg '>bussiness</button>

                    <button onClick={() => filterResult('E-commerce')} className='text-lg '>E-Commerce</button>

                </div>
                <div className='grid col-span-3 grid-cols-3 gap-10'>
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