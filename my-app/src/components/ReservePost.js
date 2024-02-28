import React, { useState } from "react";

export default function ReservePost({ onSubmit, onChange }) {
    const [reservationData, setReservationData] = useState({
        date: "",
        memo: "",
        location: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const isoDate = new Date(reservationData.date).toISOString();
        const requestData = {
            ...reservationData,
            date: isoDate,
        };
        
        fetch("http://127.0.0.1:8090/api/collections/reservation/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        }) 
            .then((response) => response.json())
            .then((data) => {
                console.log("Reservation successfully created:", data.message);
                setReservationData({
                    date: "",
                    memo: "",
                    location: "",
                });
            })
            .catch((error) => {
                console.error("Error creating reservation:", error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReservationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    console.log("ll", handleChange)

    return (
        <form onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit} className="reservation-form">
                <br />
            </form>
        </form>
    );
}
