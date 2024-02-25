const express = require('express');
const bodyParser = require('body-parser');
const PocketBase = require('pocketbase');

const app = express();
const PORT = process.env.PORT || 8090; // 포트 설정

// Body-parser 미들웨어 추가
app.use(bodyParser.json());

// PocketBase 초기화
const pb = new PocketBase();

// POST 요청 처리
app.post(`${process.env.LOCAL_BACKEND}/api/collections/post/records`, async (req, res) => {
    try {
        // 받은 데이터
        const data = req.body;

        // PocketBase에 데이터 추가
        const record = await pb.collection('post').create(data);

        // 응답
        res.status(201).json({ success: true, data: record });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 ${process.env.LOCAL_BACKEND} 에서 실행 중입니다.`);
});
