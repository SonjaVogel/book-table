import React, { useState } from "react";
import BookingForm from './BookingForm';
import '../styles/BookingPage.css';

function BookingPage(props) {

const {availableTimes, dispatch, date, setDate} = props;
    return(
        <section className="grid booking-page">
            <div className="booking-header grid">
                <h1 className="booking-title">Reserve a Table</h1>
            </div>
            <div className="booking-item">
                <BookingForm
                    availableTimes={props.availableTimes}
                    dispatch={props.dispatch}
                    date={props.date}
                    setDate={props.setDate} />
            </div>
        </section>
    )
}

export default BookingPage;