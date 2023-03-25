import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const {movie_title} = useLoaderData()
    return (
        <div>
            <h2>{movie_title}</h2>
        </div>
    );
};

export default CheckOut;