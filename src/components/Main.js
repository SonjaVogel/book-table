import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { Routes, Route } from "react-router-dom";
import { useState, useReducer } from "react";

// Define the initial state for the availableTimes
const initialTimes = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

// Define the reducer function for updating the availableTimes
export const updateTimes = (state, action) => {
// Use a switch statement to handle different action types
switch (action.type) {
    // If the action type is "changeDate", return a new array of times based on the action payload (the selected date)
    case "changeDate":
    // For now, return the same array regardless of the date
    return initialTimes;
    // If the action type is not recognized, throw an error
    default:
    throw new Error("Invalid action type");
}
}

function Main() {

    // Use useReducer with the updateTimes function and the initialTimes array
    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

    return(
        <main>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/reserve-table" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
                </Routes>

        </main>
    )
}

export default Main;