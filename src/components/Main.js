import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from '../api.js';

// Change the updateTimes function to use the fetchData function
export const updateTimesbackup = (state, action) => {
  // Use a switch statement to handle different action types
  switch (action.type) {
    // If the action type is "changeDate", return a new array of times based on the action payload (the selected date)
    case "changeDate":
      // Return a promise that resolves with the available times for the selected date
      return new Promise((resolve, reject) => {
        // Use the fetchData function to get the available times
        fetchAPI(action.payload, function(times) {
          // Resolve the promise with the times array
          resolve(times);
        });
      });
    // If the action type is not recognized, throw an error
    default:
      throw new Error("Invalid action type");
  }
}

export const updateTimes = (state, action) => {
  // Use a switch statement to handle different action types
  switch (action.type) {
    // If the action type is "changeDate", return a new array of times based on the action payload (the selected date)
    case "changeDate":
      // Return an array of available times for the selected date
      return fetchAPI(action.payload);
    // If the action type is not recognized, throw an error
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

/* export const submitForm = (formData, navigate) => {
  console.log("Form data:", formData);
  submitAPI(formData)
  .then((response) => {
    console.log("Response:", response);
    if (response.success) {
      navigate("/reservation-confirmation"); } })
      .catch((error) => {
        console.error("Error:", error);
      });
}
 */
function Main() {
  // Use useReducer with the updateTimes function and an empty array as initial state
  const [date, setDate] = useState(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

    // Use useEffect to dispatch an action with the initial date as payload
  useEffect(() => {
    // Dispatch an action with today's date as payload
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