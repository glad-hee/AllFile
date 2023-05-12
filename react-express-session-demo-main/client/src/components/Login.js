import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ loginHandler, setUserInfo }) => {
  const [inputData, setInputData] = useState({
    username: '',
    password: '',
  });

  const inputHandler = (e) => {
    // 각 input name에 e.target.value 저장
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const loginRequestHandler = async () => {
    // 로그인 결과 확인
    // (추가) axios 옵션으로 { withCredentials: true } 전달해야 쿠키 전달 가능
    // 현재 back과 front의 도메인이 서로 다르기에 요청을 보낼 때 credential 정보를 딤아서 보낼 때 설정이 필요함
    axios
      .post(
        'http://localhost:8000/users/login',
        {
          userId: inputData.username,
          password: inputData.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log('로그인 결과 >>', res.data);

        // 로그인한 유저 정보 확인
        return axios.get('http://localhost:8000/users/userinfo', {
          withCredentials: true,
        });
      })
      .then((res) => {
        console.log('로그인한 유저 확인 >>', res.data.data);

        loginHandler(true); // isLogin state 변경
        setUserInfo(res.data.data); // userData state 변경
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        name="username"
        onChange={(e) => inputHandler(e)}
        value={inputData.username}
        type="text"
        placeholder="username"
      />
      <input
        name="password"
        onChange={(e) => inputHandler(e)}
        value={inputData.password}
        type="password"
        placeholder="password"
      />
      <button onClick={loginRequestHandler}>Login</button>
    </div>
  );
};

export default Login;
