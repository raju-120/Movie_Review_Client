import React, { useEffect, useState } from 'react';
/* import { Link } from 'react-router-dom'; */ 
import MoviesCard from './MoviesCard';

const MovieServices = () => {
    
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/reviewLists')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

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
            {/* <Link to='/allmovies'>
                <button className="btn btn-outline btn-accent text-xl">See All</button>
            </Link> */}
        </div>
    );
};

export default MovieServices;