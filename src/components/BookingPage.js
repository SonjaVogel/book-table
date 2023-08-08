import '../styles/BookingPage.css';
import React from 'react';
import BookingForm from './BookingForm';
import BookingForm2 from './BookingForm2';
import BookingForm3 from './BookingForm3';
import { useScrollToTop } from '../hooks/useScrollToTop';

function BookingPage(props) {

    useScrollToTop();

    return(
        <section className="booking-page grid form">
            <div className="booking-header">
                <h1 className="booking-title">Reserve a Table</h1>
                <img
                    src={`${process.env.PUBLIC_URL}/restaurant-interior.jpg`}
                    alt="Little Lemon restaurant interior"
                    width="337px"
                    height="225px"
                    style={{marginTop: "48px"}} />
            </div>
            <div className="booking-form">
                <BookingForm
                    availableTimes={props.availableTimes}
                    dispatch={props.dispatch}
                    date={props.date}
                    setDate={props.setDate}
                    navigate={props.navigate}
                />
            </div>
        </section>
    )
}

export default BookingPage;