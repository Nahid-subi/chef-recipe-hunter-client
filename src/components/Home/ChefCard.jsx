import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  HandThumbUpIcon,
} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ChefCard = ({ data }) => {
  const { experience, likes, name, picture, recipes, id } = data;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className='mx-2'>
      <div className="card max-w-sm glass">
        <LazyLoadImage
          effect="blur"
          src={picture}
          alt="Chef"
          className={`w-[100%] h-64 rounded ${isImageLoaded ? 'image-loaded' : ''}`}
          afterLoad={handleImageLoad}
        />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Years of Experience: {experience}</p>
          <p className='flex gap-1'>Likes:   <HandThumbUpIcon className='w-5 text-gray-600' /> {likes}</p>
          <p>Number of Recipes: {recipes}</p>
          <div className="card-actions justify-end">
            <Link to={`/chefdetail/${id}`}> <button className="btn">View Recipes</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
