import React, { useState } from "react";
import "../styles/popup.css";

export default function ReservePost() {
    const [reservationData, setReservationData] = useState({
        date: "",
        time: "",
        memo: "",
        location: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [responseDate, setResponseDate] = useState("");
    const [responseMemo, setResponseMemo] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReservationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const dateTimeString = reservationData.date + "T" + reservationData.time;
        const inputDateTime = new Date(dateTimeString+ 'Z');
        if (isNaN(inputDateTime.getTime())) {
            console.error("Invalid date or time value");
            return;
        }

            fetch("http://127.0.0.1:8090/api/collections/reservation/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...reservationData,
                date: inputDateTime,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setReservationData({
                        date: "",
                        // time: "",
                        memo: "",
                        location: "",
                    });
                    // const date = new Date(data.date).toLocaleDateString();
                    setResponseDate(data.date);
                    setResponseMemo(data.memo);
                    setShowModal(true);
                    console.log("Reservation successfully created:", data);
                } else {
                    console.log("erro creating reservation:", data.message);
                }
            })
            .catch((error) => {
                console.error("Error creating reservation:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="reservation-form">
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
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span
                            className="close"
                            onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        <p>Date:{responseDate} </p>
                        <p>Memo:{responseMemo} </p>
                        <p>취소하려면 카톡해... <br />
                        </p>
                    </div>
                </div>
            )}
            <button type="submit" className="fun-btn">
                Reserve 😉
            </button>
        </form>
    );
}
