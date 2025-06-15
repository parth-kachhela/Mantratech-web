import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
