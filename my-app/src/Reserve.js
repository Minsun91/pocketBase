import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { CSSPlugin } from "gsap";
import "./styles/button.css";

gsap.registerPlugin(CSSPlugin);

export default function Reserve() {
    const [reservationData, setReservationData] = useState({
        date: "",
        memo: "",
        location: "",
    });

    //mouse effect
    useEffect(() => {
        document.querySelectorAll(".button").forEach((button) => {
            button.addEventListener("mousemove", (e) => {
            });

            button.addEventListener("mouseleave", (e) => {
            });

            button.addEventListener("click", (e) => {
            });
        });
    }, []);

    //input values
    const handleChange = (event) => {
        const { name, value } = event.target;
        setReservationData((prevData) => ({
            ...prevData,
            [name]: value.toString(),
        }));
    };

    // const handleChange2 = (event) => {
    //     const { name, value } = event.target;
    
    //     // 날짜와 시간을 ISO 8601 형식으로 변환
    //     const isoDateTime = value.replace('T', ' ') + ':00Z';
    //     setReservationData((prevData) => ({
    //         ...prevData,
    //         [name]: isoDateTime.toString(),
    //     }));

    //     console.log("ISO DateTime:", isoDateTime);
    // }
     
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://127.0.0.1:8090/api/collections/reservation/records", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservationData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('예약이 성공적으로 생성되었습니다:', data.message);
            setReservationData({
                date: '',
                memo: '',
                location: ''
            });
            console.log(reservationData.date)
        })
        .catch(error => {
            console.error('예약 생성 중 에러 발생:', error);
        });
    };
      

    return (
        <div>
            <h1>Book Minsoon Now </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input
                        type="datetime-local"
                        name="date"
                        value={reservationData.date}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label>
                    What to do: 
                    <input
                        type="text"
                        name="memo"
                        value={reservationData.memo}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label>
                    Where to meet: 
                    <input
                        type="text"
                        name="location"
                        value={reservationData.location}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <button className="fun-btn" onClick={handleSubmit}> Reserve 😉 </button>
            </form>
        </div>
    );
}
