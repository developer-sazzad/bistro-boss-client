import Lottie from "lottie-react";
import registerLottie from '../../assets/others/registerLottie.json'

import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {
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
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        handleValidateCaptcha()
        console.log(name, email, password);
    }
    return (
        <div className="login-background min-w-full min-h-screen  flex  items-center">
            <div className="md:flex flex-row-reverse border-1 items-center justify-between border-gray-300 w-full mx-20 my-10 shadow-2xl px-10 lg:px-24 py-10">
                <div className='flex-1 flex justify-center'>
                    <Lottie style={{width: '80%'}} animationData={registerLottie} loop={true} />;
                </div>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <h2 className='text-3xl font-bold text-center '>Create an a Account !!</h2>
                    <form onSubmit={handleLogin} className='**:focus:outline-none w-full'>
                        <legend>Name</legend>
                        <input type="text" placeholder='Enter your Name' className='input w-full' name="name" />


                        <legend className="mt-3">Email</legend>
                        <input type="email" placeholder='Enter your Email' className='input w-full' name="email" />

                        <legend className='mt-3'>Password</legend>
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
                        <div className="w-full mt-3">
                            <LoadCanvasTemplate />
                            <input type='text' ref={captchaRef} className='input w-full' placeholder="Type the Captcha" />
                        </div>

                        <input type="submit" className='btn w-full mt-5 btn-warning' value="Register" />
                    </form>
                    <div className="pt-5 text-center">
                        <p>Already registered? 
                            <Link to='/login' className="font-bold text-orange-400"> Login your Account!</Link>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;