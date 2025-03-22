import Lottie from "lottie-react";
import loginLottie from '../../assets/others/login-image.json'

import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const captchaRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () => {
        const captchaValue = captchaRef.current.value;
        console.log(captchaValue)
        if (validateCaptcha(captchaValue)) {
            console.log('Hello')
        } else {
            console.log('Wrong')
        }
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        handleValidateCaptcha()
        console.log(email, password);
    }
    return (
        <div className="login-background min-w-full min-h-screen  flex  items-center">
            <div className="md:flex flex-row-reverse border-1 items-center justify-between border-gray-300 w-full mx-20 my-10 shadow-2xl px-10 lg:px-24 py-10">
                <div className='flex-1'>
                    <Lottie animationData={loginLottie} loop={true} />;
                </div>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <h2 className='text-3xl font-bold text-center '>Login</h2>
                    <form onSubmit={handleLogin} className='**:focus:outline-none w-full'>
                        <legend>Email</legend>
                        <input type="email" placeholder='Enter your Email' className='input input-md w-full' name="email" />

                        <legend className='mt-5'>Password</legend>
                        <div className="w-full relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className='input w-full' placeholder="Enter your Password" />
                            <button className="w-4 absolute inset-y-0 right-5" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ?
                                    <VscEye className='w-5 h-5' />
                                    :
                                    <VscEyeClosed className='w-5 h-5' />
                                }
                            </button>
                        </div>
                        <div className="w-full mt-5">
                            <LoadCanvasTemplate />
                            <input type='text' ref={captchaRef} className='input w-full' placeholder="Enter your Password" />
                        </div>

                        <input type="submit" className='btn w-full mt-5 btn-warning' value="Login" />
                    </form>
                    <div className="pt-5 text-center">
                        <p>New here?
                            <Link to='/register' className="font-bold text-orange-400"> Create a New Account!</Link>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;