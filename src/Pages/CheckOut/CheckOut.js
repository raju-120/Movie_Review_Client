import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    
    const {user} = useContext(AuthContext);
    const { _id, movie_title, img, cast, director, 
        Writer, rating,genres,description} = useLoaderData();

    const handleComments = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unRegistered';
        const massage = form.commentBox.value;

        const comments = {
            service : _id,
            serviceName : movie_title,
            email,
            massage
        }
        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(comments)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged)
            {
                form.reset();
                alert('Your Opinion Post Successfully');
            }
        })
        .catch(err => console.error(err));
    }
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

            <div className=" mt-5">
                <div className="card  w-2/5  bg-base-100">
                    <form onSubmit={handleComments} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your  Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" defaultValue={user?.email} readOnly/>
                        </div>
                        <div className="form-control">
                            {/* <!-- lg --> */}
                            <textarea placeholder="Comment Box" name='commentBox' className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Comments</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
};

export default CheckOut;