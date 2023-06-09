import React, { useEffect, useState } from 'react';
import MoviesCard from './MoviesCard';

const MovieServices = () => {
    
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('https://movie-review-server.vercel.app/reviewLists?limit=true')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleSeeALL = () =>{
            fetch('https://movie-review-server.vercel.app/reviewLists')
            .then(res => res.json())
            .then(data => setServices(data))  
    } 

    return (
        <div>
            <div className='mt-5 text-center'>
                <p className="text-xl font-bold text-orange-600">Movies</p>
                <h2 className="my-5 text-5xl font-semibold">Movie Lists Area</h2>
            </div>
            <div className='mb-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {services.map(service => <MoviesCard
                key={service._id}
                service={service}>
                    
                </MoviesCard>)}
            </div>
            <button onClick={handleSeeALL} className='btn btn-outline btn-success'>
                See All
            </button> 
            
        </div>
    );
};

export default MovieServices;