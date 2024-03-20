import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import ReservePost from './containers/Reserve';
import SignUp from './components/SignUp';
import ReserveGet from "./components/ReserveGet";

const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/reserve" element={<ReservePost />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/get" element={<ReserveGet />} />
            </Routes>
        </Router>
    );
};

export default App;
