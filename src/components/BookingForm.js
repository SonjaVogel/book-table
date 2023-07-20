import React from "react";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import { Button, Input, Box, Select, SimpleGrid } from "@chakra-ui/react";
import '@fortawesome/fontawesome-free/css/all.css';
import { useFormikContext } from "formik";
import { submitForm } from './Main';

const validationSchema = Yup.object().shape({
  people: Yup.number().min(1, "At least one person is required").max(8, "Maximum 8 people are allowed").required("Number of people is required"),
  date: Yup.date()
        .transform((value, originalValue) => new Date(originalValue))
        .min(new Date(), "Date must be in the future")
        .required("Date is required"),
  time: Yup.string().required("Time is required"),
  occasion: Yup.string().oneOf(["birthday", "engagement", "anniversary"], "Invalid occasion"),
  location: Yup.string().oneOf(["inside", "outside"], "Invalid location").required("Seating location is required"),
  name: Yup.string().min(2, "At least 2 characters required").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  notes: Yup.string()
});

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

/* const handleSubmit = (values, actions, navigate) => {
  submitForm(values, navigate);
  actions.resetForm();
}; */

const CustomIcon = ({ name, icon, ...props }) => {
    const { touched, errors } = useFormikContext();
    return (
      <i
        className={"fas fa-xl fa-" + icon}
        aria-hidden="true"
        style={{
          color: touched[name] && !errors[name] ? "var(--highlight-lgrey)" : ("#000000"),
        }}
        /* style={{
            color: errors[name] ? "#000000" : (touched[name] ? "var(--highlight-lgrey)": "#000000"),
        }} */
        {...props}
      ></i>
    );
};



const fieldStyle = {
    width: "340px",
    textAlign: "center",
    bg: "#EDEFEE",
};

const CustomSelect = ({ name, ...props}) => {
 const { touched, errors } = useFormikContext();
 return (
   <Select
        name={name}
        {...fieldStyle}
        {...props}
        bg={touched[name] && !errors[name] ? "var(--primary-green)" : "#EDEFEE"}
        color={touched[name] && !errors[name] ? "var(--highlight-lgrey)" : "black"}
        textColor={touched[name] && !errors[name] ? "var(--highlight-lgrey)" : "black"}
    />
 );
};

const CustomInput = ({ name, ...props}) => {
    const { touched, errors } = useFormikContext();
    return (
        <Input
            name={name}
            {...fieldStyle}
            {...props}
            bg={touched[name] && !errors[name] ? "var(--primary-green)" : "#EDEFEE"}
            color={touched[name] && !errors[name] ? "var(--highlight-lgrey)" : "black"}
            textColor={touched[name] && !errors[name] ? "var(--highlight-lgrey)" : "black"}
        />
    );
   };

export default function BookingForm(props) {

    const {availableTimes, dispatch, date, setDate, navigate} = props;
    //my version

   /*  function handleDateChange(event) {
        let newDate = event.target.value;
        newDate = new Date(newDate);
        setDate(newDate);
    }
 */
    //chatGPT
    function handleDateChange(event) {
        let newDate = new Date(event.target.value);
        setDate(newDate);
    }

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            const formData = {
                people: values.people,
                date: date.toISOString().slice(0, 10),
                time: values.time,
                occasion: values.occasion,
                location: values.location,
                name: values.name,
                email: values.email,
                notes: values.notes
            };
            console.log("Form data:", formData);
            submitForm(formData, navigate); }}
        validateOnChange={true}
        >

        {({ errors, touched })=> (
          <Form
            method="post"
            >
            <SimpleGrid
                minChildWidth='340px'
                spacing='24px'
                className='chakra-simple-grid'
                >
            <Box height="60px">
                <CustomIcon icon="user-group" name="people" />
                <Field name="people">
                    {({ field, form }) => (
                        <CustomSelect
                            {...field}
                            placeholder="Number of people"
                            aria-label="Number of people"
                            aria-errormessage="people-error"
                            aria-invalid={errors.people && touched.people ? "true" : "false"}
                            value={field.value}
                            onChange={(e) => {
                                form.setFieldTouched("people");
                                form.handleChange(e);
                            }}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </CustomSelect>
                    )}
                </Field>
                {errors.people && touched.people && 
                    <span id="people-error" className="error-message" role="alert" >
                        {errors.people}
                    </span>}
                {/* // Use a span element with a class name and a descriptive id for the error message
                // Add role="alert" to make it a live region */}
                
            </Box>

            <Box height="60px">
                <div className="icon-text-calendar">
                    <CustomIcon icon="calendar-days" name="date" />
                </div>
                <Field name="date">
                    {({ field }) => (
                        <CustomInput 
                            {...field}
                            {...fieldStyle}
                            type="date"
                            onClick={field.ref}
                            aria-errormessage="date-error"
                            value={date.toISOString().slice(0, 10)}
                            onChange={(e) => {
                                field.onChange(e);
                                handleDateChange(e);
                                props.dispatch({ type: "changeDate", payload: new Date(e.target.value) });
                            }}
                        />
                    )}
                </Field>
                <br/>
                {errors.date && touched.date && <span id="date-error" className="error-message" role="alert" >{errors.date}</span>}
                </Box>

            <Box height="60px">
                <CustomIcon icon="clock" name="time" />
                <Field name="time">
                        {({ field, form }) => (
                            <CustomSelect
                                {...field}
                                placeholder="Time"
                                aria-label="Time"
                                aria-errormessage="time-error"
                                value={field.value}
                                onChange={(e) => {
                                    form.setFieldTouched("time");
                                    form.handleChange(e);
                                }}
                            >
                                {availableTimes && availableTimes.map((time) => ( <option key={time} value={time}>{time}</option> ))}
                            </CustomSelect>
                        )}
                </Field>
                {errors.time && touched.time && <span id="time-error" className="error-message" role="alert" >{errors.time}</span>}
            </Box>

            <Box height="60px">
                <CustomIcon icon="champagne-glasses" name="occasion" />
                <Field name="occasion">
                    {({ field, form }) => (
                        <CustomSelect
                            {...field}
                            placeholder="Occasion"
                            aria-label="Occasion"
                            {...fieldStyle}
                            aria-errormessage="occasion-error"
                            onChange={(e) => {
                                form.setFieldTouched("occasion");
                                form.handleChange(e);
                            }}
                            >
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </CustomSelect>
                    )}
                </Field>
                {errors.occasion && touched.occasion && <span id="occasion-error" className="error-message" role="alert" >{errors.occasion}</span>}
            </Box>

            <Box height="60px">
                <CustomIcon icon="chair" name="location" />
                <Field name="location">
                    {({ field, form }) => (
                        <CustomSelect
                            {...field}
                            placeholder="Seating location"
                            aria-label="Seating location"
                            {...fieldStyle}
                            aria-errormessage="location-error"
                            onChange={(e) => {
                                form.setFieldTouched("location");
                                form.handleChange(e);
                            }}
                            >
                            <option value="inside">Inside</option>
                            <option value="outside">Outside</option>
                        </CustomSelect>
                    )}
                </Field>
                {errors.location && touched.location && <span id="location-error" className="error-message" role="alert" >{errors.location}</span>}
            </Box>

            <Box height="60px">
                <div className="icon-text-calendar">
                    <CustomIcon icon="user" name="name" />
                </div>
                <Field name="name">
                    {({ field }) => (
                        <CustomInput
                            {...field}
                            type="text"
                            placeholder="Name"
                            aria-label="Name"
                            {...fieldStyle}
                            aria-errormessage="name-error"
                            />
                    )}
                </Field>
                <br/>
                {errors.name && touched.name && <span id="name-error" className="error-message" role="alert" >{errors.name}</span>}
            </Box>

            <Box height="60px">
                <div className="icon-text-calendar">
                    <CustomIcon icon="envelope" name="email" />
                </div>
                <Field name="email">
                    {({ field }) => (
                        <CustomInput
                            {...field}
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            {...fieldStyle}
                            aria-errormessage="email-error"
                            />
                    )}
                </Field>
                <br/>
                {errors.email && touched.email && <span id="email-error" className="error-message" role="alert" >{errors.email}</span>}
            </Box>

            <Box height="60px">
                <div className="icon-text-calendar">
                    <CustomIcon icon="comment" name="notes" />
                </div>
                <Field name="notes">
                    {({ field }) => (
                        <CustomInput {...field} type="text" placeholder="Notes" aria-label="Notes" mb="2" {...fieldStyle}
                            aria-errormessage="notes-error"/>
                    )}
                </Field>
                {errors.notes && touched.notes && <span id="notes-error" className="error-message" role="alert" >{errors.notes}</span>}
            </Box>

            <Button
                type="submit"
                width="340px"
                style={{marginTop: "50px"}}
                data-testid="reserve-button"
            >
                Reserve table
            </Button>
            </SimpleGrid>
        </Form>
        )}
    </Formik>
  );
}