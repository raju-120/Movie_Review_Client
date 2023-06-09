import React, { useContext, useEffect, /* useRef */ useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Comments = ({comment, handleDelete,handleUpdate}) => {
    const {_id,serviceName, email, massage, service} = comment;
    const {user} = useContext(AuthContext);
    const [commentService, setCommentService] = useState({});
    

    //import img 
    useEffect( ()=>{
        fetch(`https://movie-review-server.vercel.app/reviewLists/${service}`)
        .then(res => res.json())
        .then(data => setCommentService(data))
    },[service]);

    /* const handleUpdate =(event, _id) =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unRegistered';
        const updateComment = form.commentBox.value;

        const update ={
            
            email, 
            updateComment
        }
        fetch(`https://movie-review-server.vercel.app/comments/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            if(data.acknowledged)
            {
                //form.window.closed();
                alert('Your Comment Updated');
                form.reset();
            }
        });
    } */

    

    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() =>handleDelete(_id)} className='btn btn-warning'>X</button>
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

                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn btn-outline">Edit</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={(event)=>handleUpdate(event, _id)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Update Your Comment</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" defaultValue={user?.email} readOnly/>
                                </div>
                                <div className="form-control">
                                    
                                    <textarea placeholder="Comment Box" name='commentBox' className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                                </div>
                                
                                <div className="form-control mt-6 modal-action">
                                    <button  htmlFor="my-modal" className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </th>
        </tr>
    );
};

export default Comments;