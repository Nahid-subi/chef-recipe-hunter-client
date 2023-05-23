import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import Facts from './Facts';
import History from './History';

const Home = () => {
    const chefData = useLoaderData();
    const isLoading = chefData.length === 0; // Assuming an empty array indicates loading state

    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className='text-2xl font-bold text-center mt-24-12'>Some Famous Chef</h1>
                <div className='flex justify-center items-center gap-14'>
                    {isLoading ? (
                        <div className="text-center mt-8">
                            <Spinner /> {/* Replace Spinner with your loading indicator component */}
                        </div>
                    ) : (
                        <section className='my-20 grid grid-cols md-grid-cols-2 lg:grid-cols-3 lg:max-w-screen-xl mx-auto gap-7'>
                            {chefData.map(data => (
                                <ChefCard key={data.id} data={data}></ChefCard>
                            ))}
                        </section>
                    )}
                </div>
            </div>
            <Facts></Facts>
            <History></History>
        </div>
    );
};

export default Home;
