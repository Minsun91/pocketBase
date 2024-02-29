import React from 'react';
import Calendar from '../components/Calendar';
import LoginForm from '../components/Login';

const LandingPage = () => {
    return (
        <div>
            <h1>Book Minsoon Now</h1>
            <Calendar />
            <LoginForm />
        </div>
    );
}

export default LandingPage;
