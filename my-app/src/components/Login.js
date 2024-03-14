import React from "react";
import PocketBase from "pocketbase";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";
import "../styles/button.css";

const LoginForm = ({ onLoginSuccess }) => {
    const navigate = useNavigate();
    const handleGoogleLogin = async () => {
        const pb = new PocketBase(process.env.DEPLOYED_URL); //http://127.0.0.1:8090
        try {
            // PocketBase를 사용하여 Google OAuth2로 로그인합니다.
            const authData = await pb.collection("users").authWithOAuth2({ provider: 'google' });

            // 로그인이 성공하면 onLoginSuccess 콜백 함수를 호출합니다.
            onLoginSuccess();
        } catch (error) {
            console.error("Error during Google login:", error.message);
        }
    };

    const handleKakaoLogin = async () => {
        const pb = new PocketBase(process.env.DEPLOYED_URL);
        try {
            // PocketBase를 사용하여 Kakao OAuth2로 로그인합니다.
            const authData = await pb.collection("users").authWithOAuth2({ provider: "kakao" });

            // 로그인이 성공하면 onLoginSuccess 콜백 함수를 호출합니다.
            onLoginSuccess();
        } catch (error) {
            console.error("Error during Kakao login:", error.message);
        }
    };

    return (
        <div
        style={{
            display: "flex",flexDirection: "column" 
        }}>
            <button onClick={handleGoogleLogin} className="fun-btn" style={{width:"300px", marginRight:"10px"}}>Log In with Google</button> <br />
            <button onClick={handleKakaoLogin} className="fun-btn2" style={{width:"300px"}}>Log In with KakaoTalk</button>
        </div>
    );
};

export default LoginForm;
