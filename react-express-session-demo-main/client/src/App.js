import { useState } from 'react';
import Login from './components/Login';
import MyPage from './components/MyPage';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);

  const loginHandler = (isLogin) => {
    setIsLogin(isLogin);
  };

  const setUserInfo = (obj) => {
    setUserData(obj);
  };

  const logoutHandler = () => {
    setIsLogin(false);
  };

  return (
    <div className="App">
      <h1>Session Demo</h1>
      {isLogin ? (
        <MyPage logoutHandler={logoutHandler} userData={userData} />
      ) : (
        <Login loginHandler={loginHandler} setUserInfo={setUserInfo} />
      )}
    </div>
  );
};

export default App;
