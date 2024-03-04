import React, { useState, useEffect } from "react";
import "../styles/reserve.css";

export default function ReservationGet() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8090/api/collections/reservation/records")
      .then((response) => response.json())
      .then((data) => {
        setReservations(data);
      })
      .catch((error) => {
        console.error("Failed to fetch reservations:", error);
      });
  }, []);

  return (
    <div>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            Date: {reservation.date}, Memo: {reservation.memo}, Location:{" "}
            {reservation.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
