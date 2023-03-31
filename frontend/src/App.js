import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CommunityDetail from "./pages/CommunityDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CommunityDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
