import { useState } from "react";
import "./App.css";
import Login from "../components/Login";
import SetPassword from "../components/SetPassword";
import BuyTickets from "../components/BuyTickets";
import QRCodeGenerator from "../components/QRCodeGenerator"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/password" element={<SetPassword />} />
          <Route path="/tickets" element={<BuyTickets />} />
          <Route path="/QRCode" element={<QRCodeGenerator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;