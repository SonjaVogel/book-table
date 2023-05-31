import React, { useState } from "react";
import BookingForm from './BookingForm';
import '../styles/BookingPage.css';

function BookingPage() {
    return(
        <section className="grid booking-page">
            <div className="booking-header grid">
                <h1 className="booking-title">Reserve a Table</h1>
            </div>
            <div className="booking-item">
                <BookingForm />
            </div>
        </section>
    )
}

export default BookingPage;