const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
// 예약 데이터를 저장할 배열
let reservations = [];

// Body-parser 미들웨어 추가
app.use(bodyParser.json());

// 예약 가능한 시간 가져오기
app.get('/api/available-times', (req, res) => {
    // 간단한 예시로 9시부터 18시까지 1시간 단위로 가능하도록 설정
    // 추후에는 주말/평일 나눌 예정
    const availableTimes = [];
    for (let hour = 9; hour <= 18; hour++) {
        availableTimes.push(`${hour}:00`);
    }
    res.json(availableTimes);
});

// 예약 만들기
app.post('/api/reservations', (req, res) => {
    const { time, message, location } = req.body;
    if (!time || !message || !location) {
        return res.status(400).json({ error: '올바른 요청이 아닙니다.' });
    }
    // 여기서는 간단히 요청 받은 데이터를 예약 배열에 추가하는 것으로 대체합니다.
    const reservation = { time, message, location };
    reservations.push(reservation);
    res.status(201).json({ message: '예약이 성공적으로 생성되었습니다.' });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
