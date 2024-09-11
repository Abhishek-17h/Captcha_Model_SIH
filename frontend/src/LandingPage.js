import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white">
            <h1 className="text-5xl font-extrabold mb-8">Welcome to My Website</h1>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
                <div className="space-y-4">
                    <button 
                        onClick={() => navigate('/signin')} 
                        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                    >
                        Sign In
                    </button>
                    <button 
                        onClick={() => navigate('/signup')} 
                        className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
