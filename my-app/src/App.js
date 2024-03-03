import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import ReservePost from './containers/Reserve';
import SignUp from './components/SignUp';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/reserve" element={<ReservePost />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default App;
