import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReservationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const dateTimeString =
            reservationData.date + "T" + reservationData.time;
        const inputDateTime = new Date(dateTimeString + "Z");
        if (isNaN(inputDateTime.getTime())) {
            console.error("Invalid date or time value");
            return;
        }

        fetch(`${process.env.DEPLOYED_URL}/api/collections/reservation/records`, {
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
                        memo: "",
                        location: "",
                    });
                    setResponseDate(data.date);
                    setResponseMemo(data.memo);
                    setShowModal(true);
                    console.log("Reservation successfully created:", data);
                } else {
                    console.log("error creating reservation:", data.message);
                }
            })
            .catch((error) => {
                console.error("Error creating reservation:", error);
            });
    };
    const handleModalClose = () => {
        setShowModal(false);
        navigate("/get");
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
                    <div className="modal-content2">
                        <div class="popup-head">
                            <span class="head-title" onClick={handleModalClose}>
                                <strong> Planned! </strong>
                            </span>
                        </div>
                        <div className="popup-body2">
                            <div className="body-content2">
                                <div
                                    className="body-contentbox"
                                    style={{ textAlign: "center" }}>
                                    <p>Date: {responseDate}</p>
                                    <p>Memo: {responseMemo}</p>
                                    <p>
                                        <strong> Hit me up to cancel...</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="popup-foot">
                            <button
                                className="pop-btn2 close2"
                                id="close2"
                                onClick={handleModalClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button type="submit" className="fun-btn">
                Reserve 😉
            </button>
        </form>
    );
}
