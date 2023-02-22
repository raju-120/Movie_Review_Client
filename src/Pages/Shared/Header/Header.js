import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Assets/Images/logo.jpg';

const Header = () => {

    const menuTitle = <>
        <li className='text-2xl'> <Link>Home</Link> </li>
        <li className='text-2xl'> <Link>Service</Link> </li>
        <li className='text-2xl'> <Link>Blog</Link> </li>
        <li className='text-2xl'> <Link>Contact</Link> </li>
    </>

    
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <Link to='/' className="flex items-center">
                        <img src={img} className="h-6 mr-3 sm:h-9" alt="movie-logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Movie-Reviewer</span>
                    </Link>

                    <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>

                    <div id="mega-menu-full" style={{marginRight: '32%',}} class="items-center text-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {menuTitle}
                        </ul>
                    </div>
                </div>
                {/* <div id="mega-menu-full-dropdown" class="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
                    <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Online Stores</div>
                                    <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Segmentation</div>
                                    <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Marketing CRM</div>
                                    <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Online Stores</div>
                                    <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Segmentation</div>
                                    <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">Marketing CRM</div>
                                    <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> */}
                
            </nav>
        </div>
    );
};

export default Header;