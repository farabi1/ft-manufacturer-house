import React, { useEffect } from 'react';

import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../../components/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../components/Hooks/useToken';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';


const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [token] = useToken(user || gUser);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <h3 className=' text-red-600'>{error?.message || gError?.message}</h3>
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div>
            <Header></Header>



            <div className="flex h-screen justify-center items-center">
                <div className="card w-96 bg-slate-50 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-black">Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-black">Email</span>

                                </label>
                                <input
                                    type="email"
                                    placeholder="Type your email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Please provide valid email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-xl font-bold text-black">Password</span>

                                </label>
                                <input
                                    type="password"
                                    placeholder="Provide your password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password Required'
                                        },
                                        minLength: {
                                            value: 5,
                                            message: 'Please provide 5 characters or longer password'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                                </label>
                            </div>

                            {signInError}
                            <input className="btn btn-outline btn-primary w-full max-w-xs my-5" type="submit" value="Login" />
                        </form>

                        <p className='text-black'>Don't have an account? <Link className='text-primary' to="/signup">Register Now</Link></p>
                        <div className="divider text-black font-bold text-sm">OR</div>

                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-success text-lg"
                        >Continue With Google</button>
                    </div>
                </div>
            </div>




            <Footer></Footer>
        </div>
    );
};

export default Login;