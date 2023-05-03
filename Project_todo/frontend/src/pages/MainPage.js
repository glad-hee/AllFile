import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "../components/Today";
import Scheduled from "../components/Scheduled";
import All from "../components/All";
import Completed from "../components/Completed";

const MainPage = () => {
  return (
    <main>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/today" element={<Today />}></Route>
          <Route path="/scheduled" element={<Scheduled />}></Route>
          <Route path="/all" element={<All />}></Route>
          <Route path="/completed" element={<Completed />}></Route>
        </Routes>
      </BrowserRouter> */}
    </main>
  );
};
export default MainPage;
