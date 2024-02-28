import React, { useState } from "react";
import ButtonEffect from "../components/buttonEffect";
import ReservePost from "../components/ReservePost";

export default function Reserve() {
    const [reservationData, setReservationData] = useState({
        date: "",
        memo: "",
        location: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReservationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 이제는 ReservePost 컴포넌트를 렌더링하여 사용합니다.
        // reservationData를 props로 전달합니다.
        <ReservePost reservationData={reservationData} />
        setReservationData({
            date: "",
            memo: "",
            location: "",
        });
    };
    console.log(handleSubmit,"reserve")

    return (
        <div className="reservation-container">
            <h1 className="reservation-title">Book Minsoon Now</h1>
            <div className="button-container">
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={reservationData.date}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time:</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={reservationData.time}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="memo">What to do:</label>
                        <input
                            type="text"
                            id="memo"
                            name="memo"
                            value={reservationData.memo}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Where to meet:</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={reservationData.location}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <button className="fun-btn" onClick={handleSubmit}> Reserve 😉
                    </button>
                </div>
            </div>
            <ButtonEffect /> 
        </div>
    );
}