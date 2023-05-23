import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';

const Home = () => {
    const chefData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div>
            <h1 className='text-2xl font-bold text-center mt-24-12'> Chef</h1>
                <div className='flex justify-center items-center gap-14'>
                    <section className='my-20 grid grid-cols md-grid-cols-2 lg:grid-cols-3 lg:max-w-screen-xl mx-auto gap-7 '>
                        {
                            chefData.map(data => <ChefCard
                                key={data.id}
                                data={data}
                            ></ChefCard>)
                        }
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;