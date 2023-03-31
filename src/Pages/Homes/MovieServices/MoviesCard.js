import React from 'react';
import { Link } from 'react-router-dom';

const MoviesCard = ({service}) => {
    const {_id, movie_title, img, rating} = service;
    return (
        <div>
            <div className="card w-96 bg-base-300 shadow-3xl" style={{marginLeft: '40px'}}>
                <figure>
                    <img className='rounded-lg' src={img} alt="Shoes" style={{height: '35em'}} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title" style={{color: 'orange'}}>{movie_title}</h2>
                    <p> IMDB Rating: {rating}</p>
                    <div className="mt-2 card-actions justify-center">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary">Movie Details</button>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;