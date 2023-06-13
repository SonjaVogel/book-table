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

export default function BookingForm() {

    const [availableTimes, setAvailableTimes] = useState(["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"]);


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
                    <Select
                        {...field}
                        placeholder="Number of people"
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
                <i className="fas fa-user-group fa-xl" ></i>
                {errors.people && touched.people && <Box color="red" mb={2}>{errors.people}</Box>}
            </Box>

            <Box height="60px">
                <Field name="date">
                {({ field }) => (
                    <Input {...field} type="date" placeholder="Date" mb={2} {...fieldStyle}/>
                )}
                </Field>
                <i className="fa-solid fa-calendar-days fa-xl" ></i>
                {errors.date && touched.date && <Box color="red" mb={2}>{errors.date}</Box>}
            </Box>

            <Box height="60px">
                <Field name="time">
                    {({ field }) => (
                    <Select
                        {...field}
                        placeholder="Time"
                        mb={2}
                        {...fieldStyle}
                        value={field.value}
                    >
                        {availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                        ))}
                    </Select>
                    )}
                </Field>
                <i className="fa-solid fa-clock fa-xl"></i>
                {errors.time && touched.time && <Box color="red" mb={2}>{errors.time}</Box>}
            </Box>

            <Box height="60px">
                <Field name="occasion">
                {({ field }) => (
                    <Select {...field} placeholder="Occasion" mb={2} {...fieldStyle}>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                    </Select>
                )}
                </Field>
                <i className="fa-solid fa-champagne-glasses fa-xl"></i>
                {errors.occasion && touched.occasion && <Box color="red" mb={2}>{errors.occasion}</Box>}
            </Box>

            <Box height="60px">
                <Field name="location">
                {({ field }) => (
                    <Select {...field} placeholder="Seating location" mb={2} {...fieldStyle}>
                    <option value="inside">Inside</option>
                    <option value="outside">Outside</option>
                    </Select>
                )}
                </Field>
                <i className="fa-solid fa-chair fa-xl"></i>
                {errors.location && touched.location && <Box color="red" mb={2}>{errors.location}</Box>}
            </Box>

            <Box height="60px">
                <Field name="name">
                {({ field }) => (
                    <Input {...field} type="text" placeholder="Name" mb={2} {...fieldStyle} />
                )}
                </Field>
                <i className="fa-solid fa-user fa-lg fa-input-icons"></i>
                {errors.name && touched.name && <Box color="red" mb={2}>{errors.name}</Box>}
            </Box>

            <Box height="60px">
                <Field name="email">
                {({ field }) => (
                    <Input {...field} type="email" placeholder="Email" mb={2} {...fieldStyle} />
                )}
                </Field>
                <i className="fa-solid fa-envelope fa-lg fa-input-icons"></i>
                {errors.email && touched.email &&<Box color="red" mb="2">{errors.email}</Box>}
            </Box>

            <Box height="60px">
                <Field name="notes">
                {({ field }) => (
                    <Input {...field} type="text" placeholder="Notes" mb="2" {...fieldStyle} />
                )}
                </Field>
                <i className="fa-solid fa-comment fa-lg fa-input-icons"></i>
                {errors.notes && touched.notes &&<Box color="red" mb="2">{errors.notes}</Box>}
            </Box>

            <Button type="submit" width="340px" colorScheme="blue">Reserve Table</Button>
            </SimpleGrid>
        </Form>
        )}
    </Formik>
  );
}