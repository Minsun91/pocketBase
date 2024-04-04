import React, { useState, useEffect } from "react";
import "../styles/reserve.css";
import PocketBase from 'pocketbase';
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar"; 
import moment from 'moment';  

// Redux 관련 import
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../store/Auth';

const localizer = momentLocalizer(moment);

export default function ReservationGet() {
  const [reservations, setReservations] = useState([]);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(selectAuth);
  
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
    if (isAuthenticated) {
      // 로그인이 되어 있을 때 처리할 내용 추가
      // 예: 로그인한 사용자 정보를 기반으로 다른 API 호출 또는 처리
    } else {
      // 로그인이 되어 있지 않을 때 처리할 내용 추가
      // 예: 로그인 페이지로 리다이렉트 또는 알림 표시
    }
  }, [isAuthenticated]);

  return (
    <div>
      <BigCalendar
        localizer={localizer}  
        events={reservations.map(reservation => ({ 
          start: new Date(reservation.date),
          end: new Date(reservation.date),
          title: reservation.memo, 
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
