import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1 className='text-3xl'>Loading...
                <progress className="progress w-56 bg-white"></progress>
            </h1>
        
    }
    if(user){
        return children;
    }
    return <Navigate
        to='/login'
        state={{from : location}}
        replace
    ></Navigate>;
};

export default PrivateRoutes;