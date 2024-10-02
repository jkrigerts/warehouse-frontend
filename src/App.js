import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Components/Home/LandingPage";
import Login from "./Components/SignUp/Login";
import Register from "./Components/SignUp/Register";
import Available from "./Components/Home/Available";
import Rent from './Components/Home/Rent';
import Categories from "./Components/Home/Categories";
import AddItem from "./Components/Home/AddItem";
import AddEvent from "./Components/Home/AddEvent";
import PlannedEvents from "./Components/Event/PlannedEvents";
import Calendar from "./Components/Event/Calendar";
import ProductDetail from "./Components/Product/ProductDetail";
import EventDetails from "./Components/Event/EventDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Available" element={<Available />} />
                <Route path="/Rent" element={<Rent />} />
                <Route path="/Categories" element={<Categories />} />
                <Route path="/AddItem" element={<AddItem />} />
                <Route path="/AddEvent" element={<AddEvent />} />
                <Route path="/PlannedEvent" element={<PlannedEvents />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/event/:id" element={<EventDetails />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
