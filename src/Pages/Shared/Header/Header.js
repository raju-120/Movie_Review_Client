import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Assets/Images/logo.jpg';

const Header = () => {

    const menuItems = <>
        <li className='text-2xl'> <Link>Home</Link> </li>
        <li className='text-2xl'> <Link>Service</Link> </li>
        <li className='text-2xl'> <Link>Blog</Link> </li>
        <li className='text-2xl'> <Link>Contact</Link> </li>
    </>

    
    return (
        <div>
            <div className="navbar mt-2 mb-5 bg-base-200 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact text-gray-100 dark:text-gray-100 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        <img src={img} style={{height: '50px'}} alt="" /> <span style={{marginLeft: '10px'}}>Movie-Review</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-gray-100 dark:text-gray-100 ">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;