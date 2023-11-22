import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import Loading from './Loading';
import InputComponent from './InputComponent';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)

    const signup = async (data) => {
        setLoading(true)
        setError('');
        try {
            const userData = await authService.createAccount(data);

            if (userData) {
                const userData = await authService.getCurrentUser();

                if (userData) dispatch(login(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false)
        }
    };
    return (
        <>
        {
             loading ? <Loading /> : 
        <div className='flex mt-14'>
            <section className='mx-auto'>
                <form onSubmit={handleSubmit(signup)} className='w-[400px] p-10 py-14 backdrop-filter rounded-lg backdrop-blur-lg'>
                <h1 className='text-3xl font-bold'>Welcome</h1>
                {error && 
                     <p className="text-red-600 mt-8 text-center">{error}</p>
                } 
                    <div className="space-y-5 mt-4">
                        <InputComponent
                            label="Full Name: "
                            placeholder="Enter your full name"
                            icon="fi fi-sr-user"
                            {...register('name', {
                                required: true,
                            })}
                        />
                        <InputComponent
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            icon="fi fi-sr-at"
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                            value
                                        ) ||
                                        'Email address must be a valid address',
                                },
                            })}
                        />
                        <InputComponent
                            label="Password: "
                            type="password"
                            icon="fi fi-rr-key"
                            pass1="fi fi-rr-eye-crossed"
                            pass2="fi fi-rr-eye"
                            placeholder="Enter your password"
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-[50%] bg-black">
                            Signup
                        </Button>
                    </div>
                </form>
            </section>
        </div>
}
</>
    );
}

export default Signup;
