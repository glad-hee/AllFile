const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
    ],
    credentials: true,
  })
);
app.use(
  session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    sameSite: 'None', // 서로 다른 도메인간 쿠키 전송 - 모든 도메인에서 전송 가능
    // ㄴ 참고: https://velog.io/@nmy0502/%EC%84%B8%EC%85%98%EA%B3%BC-%EC%BF%A0%ED%82%A4
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 세션 유효기간
    },
  })
);

app.get('/', (req, res) => {
  res.send('hello!');
});

const usersRouter = require('./routes/user');
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
