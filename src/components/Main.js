import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from '../api.js';

export const updateTimesbackup = (state, action) => {
  switch (action.type) {
    case "changeDate":
      return new Promise((resolve, reject) => {
        fetchAPI(action.payload, function(times) {
          resolve(times);
        });
      });
    default:
      throw new Error("Invalid action type");
  }
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "changeDate":
      return fetchAPI(action.payload);
    default:
      throw new Error("Invalid action type");
  }
}

export const submitForm = (formData, navigate) => {
  console.log("Form data:", formData);
  const response = submitAPI(formData);
  console.log("Response:", response);
  if (response) {
    navigate("/reservation-confirmation");
  }
}

function Main() {
  const [date, setDate] = useState(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    dispatch({type: "changeDate", payload: new Date()});
  }, []); // Pass an empty array as second parameter to run effect only once

  const navigate = useNavigate();

  return(
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reserve-table"
            element={
                <BookingPage
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    date={date}
                    setDate={setDate}
                    navigate={navigate}
                />
            }
        />
        <Route path="/reservation-confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  )
}

export default Main;