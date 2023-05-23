import React from 'react';

const Facts = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <h1 className='text-center text-2xl font-semibold my-8'>Some Facts About Chinese Food</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='border-4 rounded-lg p-2'>
                    <h2 className='font-semibold'>Chinese food is one of the healthiest in the world.</h2>
                    <p>
                        Traditional Chinese food has to always be fresh. Most dishes are filled with huge quantities of vegetables, grass-fed meats, seafood and herbs and spices. Every ingredient is handpicked for medicinal purposes. The Chinese people rarely eat canned/frozen food.
                    </p>
                </div>
                <div className='border-4 rounded-lg p-2'>
                    <h2 className='font-semibold'> You never eat the same dish twice in China!</h2>
                    <p>
                        China has 34 provinces and every province has their own culinary traditions. Aside from this, the Chinese can whip up ingredients in so many ways because they have a lot of cooking methods. For example, chicken could be steamed, stewed, stir-fried, roasted, soy-sauced, sweet and soured and more!
                    </p>
                </div>
                <div className='border-4 rounded-lg p-2'>
                    <h2 className='font-semibold'>There are eight culinary cuisines in China.</h2>
                    <p>
                        Chinese people follow so many styles of cooking, but Chinese food experts have identified eight culinary traditions as the best. These culinary cuisines are looked at as models with their unique styles and strengths. The eight culinary cuisines of China are Anhui, Cantonese, Fujian, Hunan, Jiangsu, Shandong, Sichuan and Zhejiang cuisines.
                    </p>
                </div>
                <div className='border-4 rounded-lg p-2'>
                    <h2 className='font-semibold'>Traditional Chinese food is almost completely dairy-free.</h2>
                    <p>
                        If you’re lactose intolerant, this fact about Chinese food is the most important! Authentic Chinese food rarely uses milk-fat ingredients such as cream, butter, or cheese. However, if you eat out in bigger cities such as Beijing and Shanghai, they may mix dairy ingredients in their food, but not as common as American or European countries.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Facts;