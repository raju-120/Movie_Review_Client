import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Comments from '../Comments/Comments';

const CheckOut = () => {
    const {_id, movie_title, img, cast, director, 
        Writer, rating,genres,description} = useLoaderData();

        /* useEffect( ({reviews}) =>{
            fetch('')
            .then(res => res.json())
            .then(data => console.log(data))
        }, [{reviews}]) */
    return (
        <div>
            <div className="hero bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold mb-3" style={{color: 'yellow'}}>{movie_title}</h1>
                        <h3 className="text-2xl mb-2">Cast: <span style={{color: 'aqua'}}>{cast}</span></h3>
                        <h3 className="text-xl mb-2">Director: {director}</h3>
                        <h3 className="text-xl mb-2">Writer: {Writer}</h3>
                        <h3 className="text-xl mb-2">Genres: {genres}</h3>
                        <h2 className="card-title ">IMDB Rating:<span style={{color: 'yellow'}}>  <FaStar /> </span>{rating}</h2>
                        <p className="py-6">Description: {description}</p>
                    </div>
                    <div className="card  w-3/5  shadow-2xl bg-base-100">
                        <img className='rounded-lg' src={img} alt="" />
                    </div>
                </div>
            </div>
            <hr />
            <h2 className='mt-5 mb-5 text-4xl' style={{color: 'ghostWhite'}}>Reviews About This Movie</h2>
            <hr />
            <Comments key={_id}></Comments>
        </div>
    );
};

export default CheckOut;