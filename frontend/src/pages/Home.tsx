import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-dvh">
        <div className="flex justify-center items-center text-4xl">
            Welcome to the focus app! (Test)
        </div>
        <div className='flex gap-4 justify-center items-center h-full'>
            <Link to="/login">
                <button className="px-4 py-2 rounded shadow hover:scale-105 transition duration-200 bg-blue-500 text-white hover:cursor-pointer">
                Go to Login Page!
                </button>
            </Link>
            <Link to="/register">
                <button className="px-4 py-2 rounded shadow hover:scale-105 transition duration-200 bg-green-500 text-white hover:cursor-pointer">
                Go to Register Page!
                </button>
            </Link>
        </div>
    </div>
  );
};

export default Home;
