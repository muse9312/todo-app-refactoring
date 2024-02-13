import "./styles/reset.scss";
import "./styles/page.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
