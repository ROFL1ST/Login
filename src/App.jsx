import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import PrivateRoute from "./routers/ProtectRoute";
import PrivateAuth from "./routers/ProtectAuth";
import Dashboard from "./Page/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
