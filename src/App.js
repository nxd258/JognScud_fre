import { useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout/Layout";
import Home from "./page/Home/home";
import Login from "./page/Login/Login";
import Register from "./page/Register/register";
import AddEventAn from "./page/Event/addEventAN";
import AddEventHN from "./page/Event/addEventHN";
import Event from "./page/Event/event";
import React from "react";
import AddEventHTKH from "./page/Event/addEvenHTKH";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Event" element={<Event />} />
          <Route path="AddEventAN" element={<AddEventAn />} />
          <Route path="AddEventHTKH" element={<AddEventHTKH/>}></Route>
          <Route path="AddEventHN" element={<AddEventHN />} />
          
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
