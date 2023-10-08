import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "../Home/Home";
import Booking from "../Booking/Booking";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="booking">Book a Seat!</Link>
    </div>
  );
}
