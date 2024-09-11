import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Backend URL

// Sign up function
export const signUp = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Error during sign up:', error.response.data);
        throw error.response.data;
    }
};

// Sign in function
export const signIn = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/signin`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Error during sign in:', error.response.data);
        throw error.response.data;
    }
};
