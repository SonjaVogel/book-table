import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import PageOutOfScope from './PageOutOfScope';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useReducer, useEffect } from 'react';
import { updateTimes } from '../utils/formUtils';

function Main() {
  const [date, setDate] = useState(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    dispatch({type: "changeDate", payload: new Date()});
  }, []); // Empty array as second parameter to run effect only once

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
        <Route path="/out-of-scope" element={<PageOutOfScope />} />
      </Routes>
    </main>
  )
}

export default Main;