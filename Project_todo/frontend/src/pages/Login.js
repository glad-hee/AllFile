import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");

  const signIn = () => {
    const user = { userId, pw };
    axios.post("http://localhost:8000/api/login", user).then((res) => {
      console.log(res);
    });
  };

  return (
    <main>
      <form>
        <input
          className="bg-grey"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          className="bg-blue"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button onClick={signIn}>Login</button>
      </form>
    </main>
  );
};

export default Login;
