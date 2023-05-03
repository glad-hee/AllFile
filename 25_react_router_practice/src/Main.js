import { Link } from "react-router-dom";

const Main = () => {
  const style = { margin: "4px" };

  return (
    <>
      <h2>React router practice</h2>
      <nav>
        <ul>
          <li style={style}>
            <Link to="/student/sean">Student</Link>
          </li>
          <li style={style}>
            <Link to="/student/codingon">codingon</Link>
          </li>
          <li style={style}>
            <Link to="/student/new?name=jisu">searchParams</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Main;
