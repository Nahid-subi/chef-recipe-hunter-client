import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';

const Home = () => {
    const chefData = useLoaderData();
    console.log(chefData)
    return (
        <div>
            <Banner></Banner>
            <section>
                {
                    chefData.map(data => <ChefCard
                    key={data.id}
                    data={data}
                    ></ChefCard>)
                }
            </section>
        </div>
    );
};

export default Home;