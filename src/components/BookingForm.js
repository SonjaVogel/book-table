/* import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormControl, FormLabel, Select, FormErrorMessage, Textarea } from "@chakra-ui/react";
import { InputControl } from "formik-chakra-ui";
import { ChakraProvider } from "@chakra-ui/react"
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
 import { Button } from "@chakra-ui/button";
 import { ChevronDownIcon } from "@chakra-ui/icons";

const validationSchema = Yup.object().shape({
  people: Yup.number()
    .oneOf([1, 2, 3, 4, 5, 6, 7, 8], "Invalid number of people")
    .required("required"),
  date: Yup.date()
    .min(new Date(), "Date should be in the future")
    .required("required"),
  time: Yup.string()
    .oneOf(["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"], "Invalid time")
    .required("required"),
  occasion: Yup.string()
    .oneOf(["Birthday", "Engagement", "Anniversary"], "Invalid occasion"),
  seatingArea: Yup.string()
    .oneOf(["Inside", "Outside"], "Invalid seating area")
    .required("required"),
  notes: Yup.string().max(100, "Maximum of 100 characters"),
});

const initialValues = {
  people: "",
  date: "",
  time: "",
  occasion: "",
  seatingArea: "",
  notes: "",
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

function BookingForm() {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormControl id="people" isInvalid={errors.people && touched.people}>
              <FormLabel htmlFor="people">Number of People</FormLabel>
              <Select
                name="people"
                id="people"
                placeholder="Number of people"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </Select>
              <FormErrorMessage>{errors.people}</FormErrorMessage>
            </FormControl>
            <FormControl id="date" isInvalid={errors.date && touched.date}>
              <FormLabel htmlFor="date">Date</FormLabel>
              <InputControl
                type="date"
                name="date"
                id="date"
              />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl id="time" isInvalid={errors.time && touched.time}>
              <FormLabel htmlFor="time">Time</FormLabel>
              <Select
                name="time"
                id="time"
                placeholder="Time"
              >
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
              </Select>
              <FormErrorMessage>{errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl id="occasion" isInvalid={errors.occasion && touched.occasion}>
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Menu closeOnSelect={false}>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Occasion
                </MenuButton>
                <MenuList minWidth="240px">
                  <Field name="occasion">
                    {({ field }) => (
                      <>
                        <MenuItem
                          type="checkbox"
                          {...field}
                          value="Birthday"
                          isChecked={field.value.includes("Birthday")}
                        >
                          Birthday
                        </MenuItem>
                        <MenuItem
                          type="checkbox"
                          {...field}
                          value="Engagement"
                          isChecked={field.value.includes("Engagement")}
                        >
                          Engagement
                        </MenuItem>
                        <MenuItem
                          type="checkbox"
                          {...field}
                          value="Anniversary"
                          isChecked={field.value.includes("Anniversary")}
                        >
                          Anniversary
                        </MenuItem>
                      </>
                    )}
                  </Field>
                </MenuList>
              </Menu>
              <FormErrorMessage>{errors.occasion}</FormErrorMessage>
            </FormControl>
          </Form>
        )}
      </Formik>
    </div>
  )}

export default BookingForm; */

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  people: Yup.number()
    .oneOf([1, 2, 3, 4, 5, 6, 7, 8], "Invalid number of people")
    .required("required"),
  date: Yup.date()
    .min(new Date(), "Date should be in the future")
    .required("required"),
  time: Yup.string()
    .oneOf(["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"], "Invalid time")
    .required("required"),
  occasion: Yup.string()
    .oneOf(["Birthday", "Engagement", "Anniversary"], "Invalid occasion"),
  seatingArea: Yup.string()
    .oneOf(["Inside", "Outside"], "Invalid seating area")
    .required("required"),
  notes: Yup.string().max(100, "Maximum of 100 characters"),
});

const initialValues = {
  people: "",
  date: "",
  time: "",
  occasion: "",
  seatingArea: "",
  notes: "",
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

function BookingForm() {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="people">Number of People</label>
              <Field
                as="select"
                name="people"
                id="people"
                className={
                  errors.people && touched.people
                    ? "form-control is-invalid"
                    : "form-control"
                }
              >
                <option value="">Number of people</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </Field>
              <ErrorMessage
                name="people"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <Field
                type="date"
                name="date"
                id="date"
                className={
                  errors.date && touched.date
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <ErrorMessage
                name="date"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <Field
                as="select"
                name="time"
                id="time"
                className={
                  errors.time && touched.time
                    ? "form-control is-invalid"
                    : "form-control"
                }
              >
                <option value="">Time</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
              </Field>
              <ErrorMessage
                name="time"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <Field
                as="select"
                name="occasion"
                id="occasion"
                className={
                  errors.occasion && touched.occasion
                    ? "form-control is-invalid"
                    : "form-control"
                }
              >
                <option value="">Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
              </Field>
              <ErrorMessage
                name="occasion"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="seatingArea">Seating area</label>
              <Field
                as="select"
                name="seatingArea"
                id="seatingArea"
                className={
                  errors.seatingArea && touched.seatingArea
                    ? "form-control is-invalid"
                    : "form-control"
                }
              >
                <option value="">Seating area</option>
                <option value="Inside">Inside</option>
                <option value="Outside">Outside</option>
              </Field>
              <ErrorMessage
                name="seatingArea"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes (optional)</label>
              <Field
                as="textarea"
                name="notes"
                id="notes"
                placeholder="Any notes? E.g. allergies or other requests"
                rows={3}
                className={
                  errors.notes && touched.notes
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <ErrorMessage
                name="notes"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Reserveer
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookingForm;