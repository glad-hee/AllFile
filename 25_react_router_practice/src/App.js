import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Student from "./Student";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/student/:name" element={<Student />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
