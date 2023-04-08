import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Comments from './Comments';



const MyComments = () => {
    const {user} = useContext(AuthContext);
    const [myComments, setComments] = useState([]);

    useEffect(() =>{
        if(!user?.email){
            return;
        }
        fetch(`http://localhost:5000/comments?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [user?.email]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure that, you want to delete review?');
        if(proceed){
            fetch(`http://localhost:5000/comments/${id}`, {
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