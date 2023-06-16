import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { Routes, Route } from "react-router-dom";
import React, { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from '../api.js';

/* window.fetchData = fetchAPI;
window.submitData = submitAPI; */

// Change the initializeTimes function to return a promise
/* const initializeTimes = () => {
  let date = new Date();
  return new Promise((resolve, reject) => {
    fetchAPI(date, function(times) {
      resolve(times);
    });
  });
} */

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

function Main() {
  // Use useReducer with the updateTimes function and an empty array as initial state
  const [date, setDate] = useState(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  /* const customDispatch = action => {
    updateTimes(availableTimes, action).then(times => {
        dispatch({type: "changeDate", payload: times});
    });
  } */

  // Use useEffect to call initializeTimes when component mounts
  /* useEffect(() => {
     initializeTimes().then(times => {
      dispatch({type: "changeDate", payload: times});
    });
  }, []); */ // Pass an empty array as second parameter to run effect only once

  // Use useEffect to dispatch an action with the initial date as payload
useEffect(() => {
  // Dispatch an action with today's date as payload
  dispatch({type: "changeDate", payload: new Date()});
}, []); // Pass an empty array as second parameter to run effect only once

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
                    setDate={setDate} />} />
      </Routes>
    </main>
  )
}

export default Main;