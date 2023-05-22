import React from 'react';

const ChefCard = ({data}) => {
    const {experience,likes,name,picture,recipes} = data;
    console.log(data)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default ChefCard;