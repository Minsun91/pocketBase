import React, { useState } from "react";
import PocketBase from "pocketbase";
import "../styles/login.css";
import "../styles/button.css";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== passwordConfirm) {
            setPasswordsMatch(false);
            return;
        }

        const pb = new PocketBase("http://127.0.0.1:8090");
        try {
            const data = {
                email,
                password,
                passwordConfirm: passwordConfirm
            };
             // 사용자 생성
             const record = await pb.collection("users").create(data);

             // 이메일 인증 요청
             await pb.collection("users").requestVerification(email);
 
             console.log("Signup successful. Email verification requested.");
         } catch (error) {
             console.error("Error during signup:", error.message);
         }
     };

    return (
        <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">

            <div>
                <label>Email:  </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
            </div>
            <br />
            <div>
                <label>Password:  </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
            </div>
            <br />
            <div>
                <label>Confirm Password:  </label>
                <input
                    type="password"
                    value={passwordConfirm}
                    onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                        setPasswordsMatch(e.target.value === password); // 확인 비밀번호가 일치하는지 확인
                    }}
                    className="input-field"
                />
                {!passwordsMatch && <p>Passwords do not match</p>} {/* 비밀번호가 일치하지 않는 경우 메시지 표시 */}
            </div>
            <br />
            <button type="submit" className="fun-btn">Login</button>
            </div>
        </form>
        
    );
};

export default LoginForm;