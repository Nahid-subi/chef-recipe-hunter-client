import React from 'react';
import {
    HeartIcon, 
  } from '@heroicons/react/24/solid'

const RecipeCard = ({data}) => {
    console.log(data)
    const {name , method, rating ,ingredients } = data;
    return (
        <div>
            <h1> {name}</h1>
            <div>
             Ingredients:
             <ul>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
             </ul>
            </div>
            <p>{method}</p>
            <div>
                <div>
                    {rating}
                </div>
                <div>
                <HeartIcon className='w-5 text-gray-600' />
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;