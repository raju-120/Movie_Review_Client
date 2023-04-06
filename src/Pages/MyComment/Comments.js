import React, { useEffect, useState } from 'react';

const Comments = ({comment}) => {
    const {serviceName, email, massage, service} = comment;
    const [commentService, setCommentService] = useState({});

    useEffect( ()=>{
        fetch(`http://localhost:5000/reviewLists/${service}`)
        .then(res => res.json())
        .then(data => setCommentService(data))
    },[service])
    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-warning'>X</button>
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