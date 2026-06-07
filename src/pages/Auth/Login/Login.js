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
                            className="btn btn-outline btn-success text-lg w-full"
                        >Continue With Google</button>

                        {/* Demo/Examiner Credentials Box */}
                        <div className="mt-6 p-4 bg-blue-50/60 border border-blue-100 rounded-2xl text-slate-700 text-xs">
                            <p className="font-bold text-blue-900 mb-2 flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Examiner Demo Credentials:
                            </p>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center bg-white/90 p-2 rounded-lg border border-blue-50/80 shadow-xs">
                                    <span><strong>Buyer Role:</strong> buyer@industrial.com</span>
                                    <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-[10px] text-slate-600 font-bold select-all">password123</span>
                                </div>
                                <div className="flex justify-between items-center bg-white/90 p-2 rounded-lg border border-blue-50/80 shadow-xs">
                                    <span><strong>Admin Role:</strong> rashidfarabi@gmail.com</span>
                                    <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-[10px] text-slate-600 font-bold select-all">password123</span>
                                </div>
                            </div>
                            <p className="text-[10.5px] text-slate-500 mt-2.5 leading-relaxed">
                                <strong>Tip:</strong> If these accounts are not yet registered in your Firebase Auth environment, simply click <Link className="text-blue-600 font-bold hover:underline" to="/signup">Register Now</Link> and sign up using these exact emails. The database will automatically recognize and grant them their respective Buyer/Admin dashboard panels!
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <Footer></Footer>
        </div>
    );
};

export default Login;