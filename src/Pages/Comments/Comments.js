import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Comments = () => {

    const { user } = useContext(AuthContext);

    const handleComments = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unRegistered'; 
        const comment =  form.commentBox.value;

        const allComment ={
            email,
            comment
        }

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(allComment)
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
            <div className=" mt-5">
                <div className="card  w-2/5  bg-base-100">
                    <form onSubmit={handleComments} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your  Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" defaultValue={user?.email} />
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

export default Comments;