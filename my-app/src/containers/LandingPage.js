import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import LoginForm from '../components/Login';
import ReservePost from '../components/ReservePost';

const LandingPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태 변수를 추가합니다.

    // 로그인 성공 시 호출될 함수
    const handleLoginSuccess = () => {
        setIsLoggedIn(true); // 로그인 상태를 true로 변경합니다.
    };

    // 로그인이 되어 있으면 예약 페이지를 보여주고, 그렇지 않으면 로그인 폼을 보여줍니다.
    return (
        <div>
            <h1>Book Minsoon Now</h1>
            {isLoggedIn ? ( // 로그인 상태에 따라 예약 페이지 또는 로그인 폼을 보여줍니다.
                <ReservePost />
            ) : (
                <LoginForm onLoginSuccess={handleLoginSuccess} /> // 로그인 폼에 로그인 성공 시 호출될 함수를 전달합니다.
            )}
            <Calendar />
        </div>
    );
}

export default LandingPage;
