import React from "react";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-body">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
