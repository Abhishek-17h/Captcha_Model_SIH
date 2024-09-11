import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; // Import LandingPage
import SignIn from './Signin';
import SignUp from './SignUp';
import Welcome from './Welcome';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </Router>
    );
};

export default App;
