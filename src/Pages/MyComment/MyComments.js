import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Comments from './Comments';
import useTitle from '../../hooks/useTitle';



const MyComments = () => {
    const {user, logOut} = useContext(AuthContext);
    const [myComments, setComments] = useState([]);
    useTitle('Comment');

    useEffect(() =>{
        if(!user?.email){
            return;
        }
        fetch(`https://movie-review-server.vercel.app/comments?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('review-token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut();
            }
            return res.json()
        })
        .then(data => setComments(data))
    }, [user?.email , logOut]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure that, you want to delete review?');
        if(proceed){
            fetch(`https://movie-review-server.vercel.app/comments/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.acknowledged > 0){
                    alert('deleted successfully');
                    const remaining = myComments.filter(cmt => cmt._id !== id);
                    setComments(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h2>You have: {myComments.length} Data</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th> 
                            <th>Movie Name</th>
                            <th>Email</th>
                            <th>Comments</th>
                            <th>Edit Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myComments.map(comment => <Comments
                            key={comment._id}
                            comment = {comment}
                            handleDelete={handleDelete}
                            ></Comments>)
                        } 
                    </tbody>
                </table>
            </div> 
        </div>
    );
};

export default MyComments;