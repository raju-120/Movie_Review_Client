import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    
    const {userLogin, googleSignIn} = useContext(AuthContext); 

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
        .then(result =>{
            const user = result.user;
            const currentUser ={
                email: user.email
            }
            console.log(currentUser)
        })
        .catch( err => console.error(err));
    } 

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then( result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col w-3/5 lg:flex-row ">
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold mt-5 text-gray-100 dark:text-gray-100">Login Now</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-100 dark:text-gray-100">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-100 dark:text-gray-100">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <Link className=" mt-2">
                                <p className='mb-2  text-gray-100 dark:text-gray-100'>Login with others application?</p>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary">Google</button>
                            
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;