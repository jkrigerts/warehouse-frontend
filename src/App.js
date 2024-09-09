import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Components/Home/LandingPage";
import Login from "./Components/SignUp/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Login" element={<Login />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
