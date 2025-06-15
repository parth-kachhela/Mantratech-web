import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
