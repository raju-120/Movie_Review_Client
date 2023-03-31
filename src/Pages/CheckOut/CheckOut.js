import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CheckOut = () => {
    const {_id, movie_title, img, cast, director, 
        Writer, rating, reviews,genres,description} = useLoaderData()
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='rounded-lg ml-5 px-5 py-5' src={img} alt="Movie" style={{width: '500px', height: '600px'}}/>
                    </figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl" style={{color: 'yellow'}}>{movie_title}</h2>
                    <h2 className="card-title mt-2">Cast: {cast}</h2>
                    <h2 className="card-title ">Director: {director}</h2>
                    <h2 className="card-title ">Writer: {Writer}</h2>
                    <h2 className="card-title ">Genres: {genres}</h2>
                    <h2 className="card-title ">IMDB Rating:<span style={{color: 'yellow'}}>  <FaStar /> </span>{rating}</h2>
                    <h2 className="card-title ">Description: {description}</h2>
                </div>
            </div>
            {reviews.length()}
        </div>
    );
};

export default CheckOut;