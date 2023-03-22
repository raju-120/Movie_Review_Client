import React from 'react';

const MoviesCard = ({service}) => {
    const {movie_title,img,rating} = service;
    return (
        <div>
            <div className="card w-96 bg-base-300 shadow-3xl">
                <figure>
                    <img className='rounded-lg' src={img} alt="Shoes" style={{height: '35em'}} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title" style={{color: 'orange'}}>{movie_title}</h2>
                    <p> IMDB Rating: {rating}</p>
                    <div className="mt-2 card-actions justify-center">
                        <button className="btn btn-primary">Movie Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;