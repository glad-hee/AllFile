# React Express session demo project

## Installation

```bash
cd server/ && npm install
npm start

cd ../client/ && npm install
npm start
```

server/init.sql 을 사용해 데이터베이스 데이터도 생성해주세요.

## About Project

로그인시 세션에 userId를 저장하고 마이페이지로 이동하는 간단한 데모 프로젝트입니다. 클라이언트에서 세션이 제대로 사용되지 않는 경우, 아래 두 가지 항목이 잘 설정되어 있는지 확인해야 합니다.

1. 백엔드에서 세션을 올바르게 설정했는지
2. 프론트엔드에서 백엔드로 요청시 헤더 설정을 추가했는지

### `server/app.js`

```javascript
(...)

app.use(
  cors({
    // 요청을 날리는 도메인 주소 기입
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
    ],
    // 서로 다른 도메인간 쿠키 공유 허락
    credentials: true,
  })
);
app.use(
  session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    // 서로 다른 도메인간 쿠키 전송 - 모든 도메인에서 전송 가능
    // ㄴ 참고: https://velog.io/@nmy0502/%EC%84%B8%EC%85%98%EA%B3%BC-%EC%BF%A0%ED%82%A4
    sameSite: 'None',
    cookie: {
      // 세션 유효기간
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
```

### `client/src/Login.js`

```javascript
(...)

// axios로 로그인 요청시
axios.post(
  'http://localhost:8000/users/login',
  {
    userId: inputData.username,
    password: inputData.password,
  },
  // 현재 back과 front의 도메인이 서로 다르기에 요청을 보낼 때 credential 정보를 딤아서 보낼 때 설정이 필요함
  { withCredentials: true }
);
```
