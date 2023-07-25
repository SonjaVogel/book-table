import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import { Button, Input, Box, Select, SimpleGrid } from "@chakra-ui/react";
import '@fortawesome/fontawesome-free/css/all.css';
import { useFormikContext } from "formik";
import { submitForm } from './Main';

const validationSchema = Yup.object().shape({
    people: Yup.number().min(1, "At least one person is required").max(8, "Maximum 8 people are allowed").required("Number of people is required"),
    date: Yup.date()
        .transform((_, originalValue) => new Date(originalValue))
        .min(new Date().setHours(0,0,0,0), "Date must be in the future")
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

const CustomIcon = ({ name, icon, ...props }) => {
    const { touched, errors } = useFormikContext();
    return (
        <i
            {...props}
            className={"fas fa-xl fa-" + icon}
            aria-hidden="true"
            style={{
                color: touched[name] && !errors[name] ? "var(--highlight-lgrey)" : ("#000000"),
            }}
        >
        </i>
    );
};

const getCustomInputSelectAttributes = (name, touched, errors, props) => ({
    width: "340px",
    ...props,
    name,
    bg: touched[name] && !errors[name] ? "var(--primary-green)" : "#EDEFEE",
    color: touched[name] && !errors[name] ? "var(--highlight-lgrey)" : "black",
    textColor: touched[name] && !errors[name] ? "var(--highlight-lgrey)" : "black"
});


const CustomSelect = ({ name, ...props}) => {
    const { touched, errors } = useFormikContext();
    return (
        <Select
            {...getCustomInputSelectAttributes(name, touched, errors, props)}
        />
    );
};

const CustomInput = ({ name, ...props}) => {
    const { touched, errors } = useFormikContext();
    return (
        <Input
            {...getCustomInputSelectAttributes(name, touched, errors, props)}
        />
    );
};

const CustomDatePicker = ({ name, placeholder, ...props }) => {
    const { setFieldValue, setFieldTouched, values } = useFormikContext();
    return (
        <ReactDatePicker
            {...props}
            selected={values[name]}
            onChange={(date) => {
                setFieldValue(name, date);
                setFieldTouched(name, true);
            }}
            placeholderText={placeholder}
        />
    );
};

const CustomBox = ({ icon, name, type, placeholder, options, onChange, children }) => {
    const { errors, touched } = useFormikContext();
    return (
        <Box height="60px">
            {icon && (type === "date" || "text" ? (
                <div className="icon-text-calendar">
                    <CustomIcon icon={icon} name={name} />
                </div>
            ) : (
                <CustomIcon icon={icon} name={name} />
            ))}
            <Field name={name}>
                {({ field, form }) => (
                    type === "select" ? (
                        <CustomSelect
                            {...field}
                            placeholder={placeholder}
                            aria-label={placeholder}
                            aria-errormessage={`${name}-error`}
                            aria-invalid={errors[name] || touched[name]}
                            onChange={(e) => {
                                form.setFieldTouched(name);
                                form.handleChange(e);
                                if (onChange) onChange(e);
                            }}
                        >
                            {options && options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </CustomSelect>
                    ) : (
                        <CustomInput
                            {...field}
                            type={type}
                            placeholder={placeholder}
                            aria-label={placeholder}
                            aria-errormessage={`${name}-error`}
                            aria-invalid={errors[name] || touched[name]}
                            onChange={(e) => {
                                form.setFieldTouched(name);
                                form.handleChange(e);
                                if (onChange) onChange(e);
                            }}
                        />
                    )
                )}
            </Field>
            {(type === "text" || type === "date" || type === "email") && <br/>}
            {errors[name] && touched[name] && <span id={`${name}-error`} className="error-message" role="alert" >{errors[name]}</span>}
            {children}
        </Box>
    );
};


export default function BookingForm(props) {

    const {availableTimes, dispatch, date, setDate, navigate} = props;

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
                submitForm(formData, navigate);
            }}
            validateOnChange={true}
        >

            {({ errors, touched })=> (
                <Form method="post">
                    <SimpleGrid
                        minChildWidth='340px'
                        spacing='24px'
                        className='chakra-simple-grid' // Needed for centering form fields on real mobile, not visible in dev-tools
                    >
                        <CustomBox
                            icon="user-group"
                            name="people"
                            type="select"
                            placeholder="Number of people"
                            options={[...Array(8)].map((_, i) => ({ value: i + 1, label: i + 1 }))}
                        />

                        <Box height="60px">
                            <div className="icon-text-calendar">
                                <CustomIcon icon="calendar-days" name="date" />
                            </div>
                            <Field name="date">
                                {({ field, form }) => (
                                    <CustomInput
                                        type="date"
                                        {...field}
                                        aria-label="Date"
                                        aria-errormessage="date-error"
                                        aria-invalid={errors.date || touched.date}
                                        value={date.toISOString().slice(0, 10)}
                                        onChange={(e) => {
                                            form.setFieldTouched("date");
                                            field.onChange(e);
                                            handleDateChange(e);
                                            props.dispatch({
                                                type: "changeDate",
                                                payload: new Date(e.target.value)
                                            });
                                        }}
                                    />
                                )}
                            </Field>
                            <br/>
                            {errors.date && touched.date && <span id="date-error" className="error-message" role="alert" >{errors.date}</span>}
                        </Box>


                        <CustomBox
                            icon="clock"
                            name="time"
                            type="select"
                            placeholder="Time"
                            options={availableTimes && availableTimes.map((time) => ({ value: time, label: time }))}
                        />
                        <CustomBox
                            icon="champagne-glasses"
                            name="occasion"
                            type="select"
                            placeholder="Occasion"
                            options={[
                                { value: "birthday", label: "Birthday" },
                                { value: "engagement", label: "Engagement" },
                                { value: "anniversary", label: "Anniversary" }
                            ]}
                        />
                        <CustomBox
                            icon="chair"
                            name="location"
                            type="select"
                            placeholder="Seating location"
                            options={[
                                { value: "inside", label: "Inside" },
                                { value: "outside", label: "Outside" }
                            ]}
                        />
                        <CustomBox
                            icon="user"
                            name="name"
                            type="text"
                            placeholder="Name"
                        />
                        <CustomBox
                            icon="envelope"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        <CustomBox
                            icon="comment"
                            name="notes"
                            type="text"
                            placeholder="Notes"
                        />
                        <Button
                            type="submit"
                            width="340px"
                            style={{marginTop: "48px"}}
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