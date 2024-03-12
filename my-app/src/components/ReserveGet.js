import React, { useState, useEffect } from "react";
import "../styles/reserve.css";
import PocketBase from 'pocketbase';
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar"; 
import moment from 'moment';  

 const localizer = momentLocalizer(moment);

export default function ReservationGet() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const fetchReservations = async () => {
      try {
        const records = await pb.collection('reservation').getFullList({
              sort: '-created',
          });
          setReservations(records);

      } catch (error) {
        console.error("Failed to fetch reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <BigCalendar
        localizer={localizer} // 로컬라이저 설정
        events={reservations.map(reservation => ({ // 이벤트 설정
          start: new Date(reservation.date),
          end: new Date(reservation.date),
          title: reservation.memo, // 예약 메모를 이벤트 제목으로 사용
        }))}
        startAccessor="start" // 시작 날짜 접근자 설정
        endAccessor="end" // 종료 날짜 접근자 설정
        style={{ height: 500 }} // 캘린더 높이 설정
      />
    </div>
  );
}
