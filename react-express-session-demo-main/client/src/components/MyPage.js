import React from 'react';
import axios from 'axios';

const MyPage = ({ logoutHandler, userData }) => {
  console.log('로그인한 userData >>', userData);

  const handleLogout = () => {
    axios
      .post('http://localhost:8000/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        // isLogin state 변경
        logoutHandler();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <h2>Mypage Page</h2>
      <button className="logoutBtn" onClick={handleLogout}>
        logout
      </button>

      <p>
        <b>{userData.userId}</b> 님 환영합니다!
      </p>

      <ul>
        <li>username: {userData.userId}</li>
        <li>password: {userData.password}</li>
      </ul>
    </div>
  );
};

export default MyPage;
