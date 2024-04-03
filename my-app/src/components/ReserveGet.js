import React, { useState, useEffect } from "react";
import "../styles/reserve.css";
import PocketBase from 'pocketbase';
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar"; 
import moment from 'moment';  

// Redux 관련 import
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectAuth } from '../store/Auth';

const localizer = momentLocalizer(moment);

export default function ReservationGet() {
  const [reservations, setReservations] = useState([]);
  const dispatch = useDispatch(); // 이 코드는 함수 컴포넌트 내부에 위치해야 합니다.
  const { isAuthenticated, user } = useSelector(selectAuth); // 이 코드도 함수 컴포넌트 내부에 위치해야 합니다.
  
  useEffect(() => {
    const pb = new PocketBase(process.env.DEPLOYED_URL);

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

  useEffect(() => {
    dispatch(login({ /* 유저 정보 */ }));
  }, [dispatch]);

  return (
    <div>
      <BigCalendar
        localizer={localizer}  
        events={reservations.map(reservation => ({ 
          start: new Date(reservation.date),
          end: new Date(reservation.date),
          title: reservation.memo, 
        }))}
        startAccessor="start" // 시작 날짜 접근자 설정
        endAccessor="end" // 종료 날짜 접근자 설정
        style={{ height: 500 }} // 캘린더 높이 설정
      />
    </div>
  );
}
