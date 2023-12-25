import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    const { setLoading } = useContext(AuthContext)
    // const [error, setError] = useState("");
    const { singIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const toastId = toast.loading("Logging In....");

        // console.log(data);
        singIn(data.email, data.password)
            .then((result) => {
                toast.success('Logged In...', { id: toastId });
                console.log(result);
                navigate(state ? state : '/')
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message, { id: toastId })
            });
    };

    // google sign in
    const handelGoogleSignIn = () => {
        const toastId = toast.loading("Logging In....");
        googleSignIn()
            .then((result) => {
                console.log(result);
                toast.success('Logged In...', { id: toastId });
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email,
                    image: result?.user?.photoURL,
                    role: 'user',
                    status: 'Bronze'
                }
                // axiosPublic.post('/users', userInfo)
                navigate(state ? state : '/')
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message, { id: toastId });
            });
    };

    return (

        <section className="relative py-20 2xl:py-10 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
                            <div className="relative max-w-lg mx-auto lg:mx-0 lg:max-w-2xl h-full">
                                {/* <img className="block w-full h-142 sm:h-full object-cover rounded-5xl" src={bannerImg} alt="" /> */}
                                <div className="absolute bottom-0 w-full left-0 h-full flex items-center justify-center p-10 bg-slate-400">
                                    <div className="max-w-md mx-auto">
                                        <h4 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white font-bold mb-8">Sign in to your account</h4>
                                        <div className="md:flex mb-20">
                                            <div className="mb-6 md:mb-0 md:mr-8 pt-3 text-gray-600">
                                                <svg width="84" height="10" viewBox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z" fill="#FAFBFC"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold text-gray-200">Greetings on your return! We kindly request you to enter your details.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                            <div className="max-w-lg lg:pt-8 2xl:pt-24 lg:pb-8 mx-auto 2xl:mr-0">
                                <h3 className="text-5xl sm:text-6xl text-title-optioanl font-bold mb-12">Welcome Back</h3>

                                {/* <div className="flex flex-wrap mb-8 items-center -mx-2">
                                <div
                                    onClick={handleGoogleSignIn}
                                    className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                                    <a className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition-all duration-100 hover:bg-secondary-bg group" href="#">
                                        <FcGoogle className='text-3xl' />
                                        <span className="ml-4 text-sm font-semibold text-gray-500 group-hover:text-white">Login with Google</span>
                                    </a>
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <a className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition-all duration-100 hover:bg-secondary-bg group" href="#">
                                        <FaGithub className='text-3xl' />
                                        <span className="ml-4 text-sm font-semibold text-gray-500 group-hover:text-white">Login with GitHub</span>
                                    </a>
                                </div>
                            </div> */}

                                

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-6">
                                        <label className="block mb-1.5 text-sm font-semibold text-title-optioanl" >Email</label>
                                        <input
                                            name='email'
                                            {...register("email", { required: true })}
                                            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200  focus:outline-0 focus:shadow-none rounded-lg "
                                            type="email"
                                            placeholder="Enter email" />
                                        {errors.email && <span className="text-red-600">Email is required</span>}
                                    </div>
                                    <div className="mb-7">
                                        <label className="block mb-1.5 text-sm font-semibold text-title-optioanl" >Password</label>
                                        <input
                                            name='password'
                                            {...register("password", { required: true })}
                                            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200  focus:outline-0 focus:shadow-none rounded-lg "
                                            type="password"
                                            placeholder="Enter password" />
                                        {errors.password && <span className="text-red-600">Password is required</span>}
                                    </div>

                                    <button
                                        className="relative group block w-full py-3 px-5 text-center text-base font-semibold font-title text-white bg-slate-400 rounded-full overflow-hidden hover:bg-slate-500 transition-all"
                                        type="submit">
                                        Sign In
                                    </button>

                                </form>

                                <div className="flex items-center pt-4 space-x-1 mt-6">
                                    <div className="flex-1 h-px sm:w-16"></div>
                                    <p className="px-3 text-base   ">
                                        Signup with social accounts
                                    </p>
                                    <div className="flex-1 h-px sm:w-16"></div>
                                </div>
                                <div
                                    onClick={handelGoogleSignIn}
                                    className="flex justify-center items-center space-x-2 border m-3 p-2 border-rounded cursor-pointer glass rounded hover:bg-white hover:text-slate-800"
                                >
                                    {/* <FcGoogle size={32} /> */}

                                    <p className="text-red-500">Continue with Google</p>
                                </div>

                                <div className="text-center mt-8">
                                    <span className="text-sm font-semibold text-title-optioanl">
                                        <span>Don’t have an account?</span>
                                        <Link to='/register'>
                                            <span className='inline-block ml-1 text-title-secondary italic text-base hover:underline'>Sign Up</span>
                                        </Link>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;