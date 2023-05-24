import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { UserAuth } from '../../providers/AuthContext';

const Login = () => {
    const { googleSignIn, githubSignIn } = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleGithubSignIn = async () => {
        try {
            await githubSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name="password" required className="input input-bordered" />
                                <span className="my-3">
                                    {' '}
                                    Don't Have an Account <Link className="link link-primary" to="/register">Register</Link>
                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn">Login</button>
                            </div>
                            or
                            <div>
                                <button onClick={handleGoogleSignIn} className="btn">
                                    Login With Google <FaGoogle className="mx-2" />
                                </button>
                                <br />
                                <br />
                                <button onClick={handleGithubSignIn} className="btn">
                                    Login With GitHub <FaGithub className="mx-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
