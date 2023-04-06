import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Assets/Images/logo.jpg';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {

    const {user,  logOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch();
    }

    const menuItems = <>
        <li className='text-2xl'> <Link to='/'>Home</Link> </li>
        <li className='text-2xl'> <Link to='mycomments'>Comments</Link> </li>
        <li className='text-2xl'> <Link to='/blog'>Blog</Link> </li>
        
    </>

    
    return (
        <div>
            <div className="navbar mt-2 mb-5 bg-base-200 rounded-lg ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact text-gray-100 dark:text-gray-100 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src={img} style={{height: '50px'}} alt="" /> <span style={{marginLeft: '10px'}}>Movie-Review</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-gray-100 dark:text-gray-100 ">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                        <>
                            <Link to='/login' className="mr-5">
                                <button onClick={handleSignOut} className='btn btn-outline btn-primary'>LogOut</button>
                            </Link>
                        </>
                        :
                        <Link to='/login' className="btn btn-outline btn-primary mr-5">Login</Link>
                    }
                    {
                        user?.email ?
                        <>
                            {/* <Link to='/' className="btn btn-success"></Link> */}
                            <div className="dropdown">
                                <label tabIndex={0} className="m-1  btn btn-info">Profile</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2  shadow bg-base-100 rounded-box w-24">
                                    <li><Link>Item 1</Link></li>
                                    <li><Link>Item 2</Link></li>
                                </ul>
                            </div>
                        </>
                        :
                        <Link to='/signup' className="btn btn-success">Register</Link>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Header;