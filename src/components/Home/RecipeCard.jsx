import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';

const RecipeCard = ({ data }) => {
  const { name, method, rating, ingredients } = data;
  const [isLiked, setIsLiked] = useState(false);
  const [currentRating, setCurrentRating] = useState(rating);

  const handleLikeClick = () => {
    setIsLiked(true);
    toast.success('Recipe added to favorites!');
  };

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= currentRating ? 'text-yellow-500' : 'text-gray-300';
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 inline ${starClass}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => handleRatingChange(i)}
        >
          <path
            fillRule="evenodd"
            d="M10 1l2.928 6.777 6.698.578-4.847 4.49 1.28 6.913L10 16.39l-6.06 3.358 1.28-6.913L.374 8.355l6.698-.578L10 1zm1.464 14.668l4.466-4.135-1.136-6.147L10 3.477l-4.794 1.91L4.07 9.533l4.466 4.135-1.134 6.147L10 16.36l5.068 2.823-1.134-6.147z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="border-2 rounded max-w-sm p-3 space-y-4">
      <h1 className="text-center text-lg">{name}</h1>
      <div>
        <span className="font-semibold">Ingredients:</span>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{`${index + 1}.${ingredient}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-semibold">Method:</span>
        <p>{method}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">{renderStars()}</div>
          <div className="text-sm">{currentRating}</div>
        </div>
        <div>
          <HeartIcon
            className={`w-5 ${isLiked ? 'text-red-600' : 'text-gray-600'}`}
            onClick={isLiked ? null : handleLikeClick}
            disabled={isLiked}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
