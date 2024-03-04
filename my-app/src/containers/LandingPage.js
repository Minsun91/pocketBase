import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../components/Calendar";
import LogInForm from "../components/Login";
import ReservePost from "../components/ReservePost";

const LandingPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태 변수를 추가합니다.
    const [showPopup, setShowPopup] = useState(false); // 팝업 창을 관리하는 상태 변수를 추가합니다.
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
                `http://127.0.0.1:8090/api/collections/users/records/${email}`
            );
            const data = await response.json();

            // 서버에서 받은 응답을 기반으로 가입 여부를 결정합니다.
            return data.isRegistered; // 가입되어 있으면 true, 가입되어 있지 않으면 false를 반환합니다.
        } catch (error) {
            console.error("Error checking email registration:", error);
            return false; // 에러 발생 시 가입되어 있지 않은 것으로 처리합니다.
        }
    };

    // ReservePost 페이지로 이동하는 함수
    const goToReservePostPage = () => {
        navigate("/reserve");
    };

    // 팝업 창을 숨기는 함수
    const hidePopup = () => {
        setShowPopup(false); // 팝업 창을 숨깁니다.
    };

    // 로그인이 되어 있으면 예약 페이지를 보여주고, 그렇지 않으면 로그인 폼을 보여줍니다.
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
            }}>
            <div>
                <h1 style={{ textAlign: "center" }}>Book Minsoon Now</h1>
                {/* 수정: 먼저 로그인 폼을 보여줍니다. */}
                <LogInForm onLoginSuccess={handleLoginSuccess} />
                <br />
                <Calendar />

                {/* 팝업 창 */}
                {showPopup && (
                    <div
                        className="modal"
                        style={{ width: "400px", height: "200px" }}>
                        <div className="modal-content">
                            <span className="close" onClick={hidePopup}>
                                &times;
                            </span>
                            <p>
                                Login Successful! <br /> Please book Minsun
                                before too late! 😝
                            </p>
                            <button onClick={goToReservePostPage}>
                                Go to Reserve Post Page
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LandingPage;
