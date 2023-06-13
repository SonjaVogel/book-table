import React, { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import { Button, Input, Box, Select, SimpleGrid } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

// Validation schema for the form fields
const validationSchema = Yup.object().shape({
  people: Yup.number().min(1, "At least one person is required").max(8, "Maximum 8 people are allowed").required("Number of people is required"),
  date: Yup.date().min(new Date(), "Date must be in the future").required("Date is required"),
  time: Yup.string().oneOf(["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"], "Invalid time").required("Time is required"),
  occasion: Yup.string().oneOf(["birthday", "engagement", "anniversary"], "Invalid occasion"),
  location: Yup.string().oneOf(["inside", "outside"], "Invalid location").required("Seating location is required"),
  name: Yup.string().min(2, "At least 2 characters required").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  notes: Yup.string()
});

// Initial values for the form fields
const initialValues = {
  people: "",
  date: "",
  time: "",
  occasion: "",
  location: "",
  name: "",
  email: "",
  notes: ""
};

// Submit handler for the form
const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

// Array for the styling of the form fields
const fieldStyle = {
  bg: "#EDEFEE",
  height: "60px",
  width: "340px",
  border: "none",
  radius: "16px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  textAlign: "center",
  _focus: { outline: "none" },
  _valid: { bg:"#495E57", color:"white"},
  padding: "0px",
}

export default function BookingForm(props) {

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >

        {({ errors, touched })=> (
          <Form>
            <SimpleGrid minChildWidth='340px' spacing='24px'>
            <Box height="60px">
                <Field name="people">
                    {({ field }) => (
                    // Add aria-label to provide a descriptive label for the select field
                    // Add aria-errormessage to link the error message with the select field
                    // Add aria-invalid to indicate that the select field has an invalid value
                    <Select
                        {...field}
                        placeholder="Number of people"
                        aria-label="Number of people"
                        aria-errormessage="people-error"
                        aria-invalid={errors.people && touched.people ? "true" : "false"}
                        mb={2}
                        {...fieldStyle}
                        value={field.value}
                    >
                        <option className="dropdown-option" value="1">1</option>
                        <option style={{ borderBottom: '1px dashed #949393' }} value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </Select>
                    )}
                </Field>
                {/* Add aria-hidden to hide the icon from assistive technologies */}
                <i className="fas fa-user-group fa-xl" aria-hidden="true"></i>
                {/* // Use a span element with a class name and a descriptive id for the error message
                // Add role="alert" to make it a live region */}
                {errors.people && touched.people && 
                    <span id="people-error" class="error-message" role="alert" >
                        {errors.people}
                    </span>}
            </Box>

            <Box height="60px">
                <Field name="date">
                {({ field }) => (
                    <Input 
                        {...field}
                        type="date"
                        placeholder="Date"
                        aria-errormessage="date-error"
                        mb={2}
                        {...fieldStyle}
                        onChange={(e) => {
                            field.onChange(e);
                            props.dispatch({ type: "changeDate", payload: field.value });
                          }}
                    />
                )}
                </Field>
                <i className="fa-solid fa-calendar-days fa-xl" aria-hidden="true"></i>
                {errors.date && touched.date && <span id="date-error" class="error-message" role="alert" >{errors.date}</span>}
            </Box>

            <Box height="60px">
                <Field name="time">
                    {({ field }) => (
                    <Select
                        {...field}
                        placeholder="Time"
                        aria-label="Time"
                        aria-errormessage="time-error"
                        mb={2}
                        {...fieldStyle}
                        value={field.value}
                    >
                        {props.availableTimes && props.availableTimes.map((time) => ( <option key={time} value={time}>{time}</option> ))}
                    </Select>
                    )}
                </Field>
                <i className="fa-solid fa-clock fa-xl" aria-hidden="true"></i>
                {errors.time && touched.time && <span id="time-error" class="error-message" role="alert" >{errors.time}</span>}
            </Box>

            <Box height="60px">
                <Field name="occasion">
                {({ field }) => (
                    <Select {...field} placeholder="Occasion" aria-label="Occasion" mb={2} {...fieldStyle} 
                        aria-errormessage="occasion-error">
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                    </Select>
                )}
                </Field>
                <i className="fa-solid fa-champagne-glasses fa-xl" aria-hidden="true"></i>
                {errors.occasion && touched.occasion && <span id="occasion-error" class="error-message" role="alert" >{errors.occasion}</span>}
            </Box>

            <Box height="60px">
                <Field name="location">
                {({ field }) => (
                    <Select {...field} placeholder="Seating location" aria-label="Seating location" mb={2} {...fieldStyle}
                        aria-errormessage="location-error">
                    <option value="inside">Inside</option>
                    <option value="outside">Outside</option>
                    </Select>
                )}
                </Field>
                <i className="fa-solid fa-chair fa-xl" aria-hidden="true"></i>
                {errors.location && touched.location && <span id="location-error" class="error-message" role="alert" >{errors.location}</span>}
            </Box>

            <Box height="60px">
                <Field name="name">
                {({ field }) => (
                    <Input {...field} type="text" placeholder="Name" aria-label="Name" mb={2} {...fieldStyle} 
                        aria-errormessage="name-error"/>
                )}
                </Field>
                <i className="fa-solid fa-user fa-lg fa-input-icons" aria-hidden="true"></i>
                {errors.name && touched.name && <span id="name-error" class="error-message" role="alert" >{errors.name}</span>}
            </Box>

            <Box height="60px">
                <Field name="email">
                {({ field }) => (
                    <Input {...field} type="email" placeholder="Email" aria-label="Email" mb={2} {...fieldStyle} 
                        aria-errormessage="email-error"/>
                )}
                </Field>
                <i className="fa-solid fa-envelope fa-lg fa-input-icons" aria-hidden="true"></i>
                {errors.email && touched.email && <span id="email-error" class="error-message" role="alert" >{errors.email}</span>}
            </Box>

            <Box height="60px">
                <Field name="notes">
                {({ field }) => (
                    <Input {...field} type="text" placeholder="Notes" aria-label="Notes" mb="2" {...fieldStyle} 
                        aria-errormessage="notes-error"/>
                )}
                </Field>
                <i className="fa-solid fa-comment fa-lg fa-input-icons" aria-hidden="true"></i>
                {errors.notes && touched.notes && <span id="notes-error" class="error-message" role="alert" >{errors.notes}</span>}
            </Box>

            <Button type="submit" width="340px" data-testid="reserve-button">Reserve Table</Button>
            </SimpleGrid>
        </Form>
        )}
    </Formik>
  );
}


/* const {values} = useFormikContext();

    useEffect(() => {

        if (values.date === "2023-06-15" && values.location === "outside") {

        setAvailableTimes(["18:00", "19:00", "20:00"]);
        } else {
        setAvailableTimes(["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"]);
        }
    }, [values.date, values.location]); */

    //useEffect voor als wel API
    /* useEffect(() => {
        fetch(`https://example.com/api/available-times?date=${values.date}&location=${values.location}`)
          .then((response) => response.json())
          .then((data) => {
            setAvailableTimes(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [values.date, values.location]); */