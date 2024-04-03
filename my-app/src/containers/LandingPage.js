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
    const navigate = useNavigate(); 

    const handleLogin = () => {
        const isEmailRegistered = checkEmailIsRegistered(email);
        if (isEmailRegistered) {
            navigate("/reserve");
        } else {
            navigate("/signup");
        }
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true); 
        setShowPopup(true);
    };

    const checkEmailIsRegistered = async (email) => {
        try {
            // need to be checked
            const response = await fetch(
                `${process.env.DEPLOYED_URL}/api/collections/users/records/${email}`
            );
            const data = await response.json();

             return data.isRegistered; 
        } catch (error) {
            console.error("Error checking email registration:", error);
            return false; 
        }
    };

    //go to reserve page
    const goToReservePostPage = () => {
        navigate("/reserve");
    };

      //go to see calendar with termins
      const goToReserveGetPage = () => {
        navigate("/get");
    };

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
