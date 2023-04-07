import React, { useEffect, useState } from 'react';

const Comments = ({comment}) => {
    const {_id,serviceName, email, massage, service} = comment;
    const [commentService, setCommentService] = useState({});


    //import img 
    useEffect( ()=>{
        fetch(`http://localhost:5000/reviewLists/${service}`)
        .then(res => res.json())
        .then(data => setCommentService(data))
    },[service]);

    const handleDelete = _id =>{
        const proceed = window.confirm('Are You sure, You want to delete your review?');
        if(proceed){
            fetch(`http://localhost:5000/comments/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
            })
        }
    }
    return (
        <tr>
            <th>
                <label>
                    <button onCanPlay={() =>handleDelete(_id)} className='btn btn-warning'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-16 h-16">
                            {
                                commentService?.img &&
                                <img src={commentService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        
                    </div>
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>{massage}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>
    );
};

export default Comments;