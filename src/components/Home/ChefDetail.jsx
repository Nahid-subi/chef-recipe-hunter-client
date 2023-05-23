import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    HandThumbUpIcon,
} from '@heroicons/react/24/solid'
import RecipeCard from './RecipeCard';

const ChefDetail = ({ data }) => {
    const chefData = useLoaderData()
    const { picture, likes, name, recipes, experience, bio, recipesList ,id} = chefData;
    
    return (
        <div className='max-w-screen-xl mx-auto'>
            {/*chef banner section */}
            <section className='flex flex-col md:flex-col lg:flex-row gap-5 mx-3 my-10'>
                <div className='w-full md:w-full lg:w-[40%]'>
                    <img className='w-full h-full rounded max-h-80' src={picture} alt="" />
                </div>
                <div className='w-full md:w-full lg:w-[60%] flex flex-col justify-center'>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <h3 className='text-xl my-4'>{bio}</h3>
                    <h3 className='text-lg'>Years of Experience: {experience}</h3>
                    <h4 className='flex gap-2 text-lg'>likes : <HandThumbUpIcon className='w-5 text-gray-600' /> {likes}</h4>
                    <h4 className='text-lg'>Number of Recipes: {recipes}</h4>
                </div>
            </section>
            <section>
                <h1>Some Recipes</h1>
                {
                       chefData.recipesList.map(data => <RecipeCard
                        key={data.id}
                        data={data}
                    ></RecipeCard>)
                }
            </section>
        </div>
    );
};

export default ChefDetail;