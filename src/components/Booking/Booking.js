import React, { useState } from "react";
import "./Booking.css"
export default function Booking() {
    const [bookingDate, setBookingDate] =  useState();
    const [time, setTime] =  useState();
    const [guestCount, setGuestCount] =  useState(0);
    const [occasion, setOcccasion] =  useState("");
  return (
    <div>
      <form className="formStyle">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" />
        <label for="res-time">Choose time</label>
        <select id="res-time ">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) =>setGuestCount(e.target.value)}/>
        <label for="occasion">Occasion</label>
        <select id="occasion" value={occasion}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}
