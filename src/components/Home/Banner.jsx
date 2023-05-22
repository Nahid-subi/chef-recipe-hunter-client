import React from 'react';

const Banner = () => {
    return (
        <div className='lg:max-w-screen-xl mx-auto flex my-10 flex-col md:flex-col lg:flex-row'>
            <div className='w-full md:w-full lg:w-[50%]'>
                <img src="https://i.ibb.co/Wg312Hd/chinese-chef-alex-the-ritz-carlton-li-yen-kuala-lumpur-removebg-preview.png" alt="" />
            </div>
            <div className='mx-3 md:mx-3 flex flex-col justify-center items-center gap-5 w-full md:w-full lg:w-[50%]'>
                <h1 className='text-2xl leading-10'>
                    For many, food is an experience. It is both a science and an art. It is meant to be savored and enjoyed.In a culture with such passion for food, it is no surprise that we also like talking about it.
                </h1>
                <div>
                <button className='btn'>See More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
