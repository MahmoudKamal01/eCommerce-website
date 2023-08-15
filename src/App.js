import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
