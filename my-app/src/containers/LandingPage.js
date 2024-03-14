import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../components/Calendar";
import LogInForm from "../components/Login";
import ReservePost from "../components/ReservePost";

import "../styles/popup.css";

const LandingPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate(); // useHistory 훅을 사용하여 라우터 히스토리 객체를 가져옵니다.

    const handleLogin = () => {
        const isEmailRegistered = checkEmailIsRegistered(email);
        if (isEmailRegistered) {
            navigate("/reserve");
        } else {
            navigate("/signup");
        }
    };
    // 로그인 성공 시 호출될 함수
    const handleLoginSuccess = () => {
        setIsLoggedIn(true); // 로그인 상태를 true로 변경합니다.
        setShowPopup(true);
    };

    const checkEmailIsRegistered = async (email) => {
        try {
            // 서버로부터 이메일이 가입되어 있는지 확인하는 요청을 보냅니다.
            const response = await fetch(
                `${process.env.DEPLOYED_URL}/api/collections/users/records/${email}`
            );
            const data = await response.json();

             return data.isRegistered; // 가입되어 있으면 true, 가입되어 있지 않으면 false를 반환합니다.
        } catch (error) {
            console.error("Error checking email registration:", error);
            return false; 
        }
    };

    // ReservePost 페이지로 이동하는 함수
    const goToReservePostPage = () => {
        navigate("/reserve");
    };

      // ReserveGet 페이지로 이동하는 함수
      const goToReserveGetPage = () => {
        navigate("/get");
    };

    // 팝업 창을 숨기는 함수
    const hidePopup = () => {
        setShowPopup(false); 
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
            }}>
            <div>
            <br /><br /><br />
                <h1 style={{ textAlign: "center" }}>Book Minsoon Now</h1><br />
                <LogInForm onLoginSuccess={handleLoginSuccess} />
                <br />
                <Calendar />

                {showPopup && (
                    <div class="modal">
                        <div class="popup">
                            <div class="popup-head">
                                <span class="head-title" onClick={hidePopup}>
                                <strong>Login Successful! </strong> 
                                </span>
                            </div>

                            <div className="popup-body">
                                <div className="body-content">
                                    <div className="body-contentbox">
                                        <strong>
                                            Book Minsun before it's too late!
                                            😝 <br />
                                            👇👇👇👇👇👇
                                            </strong>
                                    </div>
                                </div>
                            </div>
                            <div class="popup-foot">
                                
                                <button
                                    className="pop-btn close"
                                    id="close"
                                    onClick={goToReserveGetPage}>
                                    Close
                                </button>

                                <button
                                    className="pop-btn confirm"
                                    id="confirm"
                                    onClick={goToReservePostPage}>
                                    Reserve
                                </button>

                            </div>
                        </div>
                        </div>
                )}
            </div>
        </div>
    );
};

export default LandingPage;
