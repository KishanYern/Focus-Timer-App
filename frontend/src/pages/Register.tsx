import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase-client';

const Register: React.FC = () => {
    const navigate = useNavigate();

    // Form Values
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    // Flags
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');

    const RegisterUser = async (email: string, password: string) => {
        const { data, error: signupError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { username }
            }
        });

        if(signupError){
            setError(true);
            setErrorText(signupError.message);
            return;
        }
        console.log('User registered:', data.user);
        navigate('/login');
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check if the passwords match.
        if(password !== repassword){
            setError(true);
            setErrorText("Passwords do not match.");
            return;
        }
            setError(false);
            setErrorText('');

        // Supabase registration
        RegisterUser(email, password);
    };

    return (
        <div className="flex justify-center items-center h-dvh bg-gray-50">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-4"
        >
            <h2 className="text-2xl font-semibold text-center">Register</h2>

            <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
            </label>
            <input
                type="text"
                id="username"
                required
                className="mt-1 w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>

            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
            </label>
            <input
                type="email"
                id="email"
                required
                className="mt-1 w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <input
                type="password"
                id="password"
                required
                className="mt-1 w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Re-enter Password
            </label>
            <input
                type="password"
                id="repassword"
                required
                className="mt-1 w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
            />
            </div>

            {
                error && 
                <div className='text-red-400'>
                    {errorText}
                </div>
            }

            <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition hover:cursor-pointer"
            >
            Register
            </button>
            Already have an account? Sign in <Link to="/login"><span className='text-blue-600'>Here!</span></Link>
        </form>
        </div>
    );
};

export default Register;
