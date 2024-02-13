import "./styles/reset.scss";
import "./styles/page.scss";
import { RouterProvider, Routers, Router } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="wrapper">
      <RouterProvider>
        <Routers>
          <Router path="/" element={<Home />} />
          <Router path="/edit" element={<Edit />} />
        </Routers>
      </RouterProvider>
    </div>
  );
}

export default App;
