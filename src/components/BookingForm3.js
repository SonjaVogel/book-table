import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import * as Yup from 'yup';
import {
    Formik,
    Form,
    Field,
    useFormikContext,
    ErrorMessage
    } from 'formik';
// import {
//     Form,
//     InputGroup,
//     Button,
//     Container,
//     Col,
//     Row,
//   } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faEnvelope,
    faClock,
    faChampagneGlasses,
    faUserGroup,
    faCalendarDays,
    faChair,
    faComment,
  } from '@fortawesome/free-solid-svg-icons';
import { submitForm } from '../utils/formUtils';

const today = new Date();

const validationSchema = Yup.object().shape({
    people: Yup.number().min(1, "At least one person is required").max(8, "Maximum 8 people are allowed").required("Number of people is required"),
    date: Yup.date()
        .transform((_, originalValue) => new Date(originalValue))
        .min(today - 86400000, "Date must be in the future")
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
    date: today.toISOString().slice(0, 10),
    time: "",
    occasion: "",
    location: "",
    name: "",
    email: "",
    notes: ""
};

// const CustomIcon = ({ name, icon, ...props }) => {
//     const { touched, errors } = useFormikContext();
//     return (
//         <i
//             {...props}
//             className={"fas fa-xl fa-" + icon}
//             aria-hidden="true"
//             style={{
//                 color: touched[name] && !errors[name] ? "var(--highlight-lgrey)" : ("#000000"),
//             }}
//         >
//         </i>
//     );
// };

// const shake = keyframes`
//     0% { transform: translateX(0); }
//     25% { transform: translateX(-10px); }
//     75% { transform: translateX(10px); }
//     100% { transform: translateX(0); }
// `;

// const getCustomInputSelectAttributes = (name, touched, errors, props) => ({
//     ...props,
//     name,
//     bg: touched[name] && !errors[name] ? "var(--primary-green)" : "var(--highlight-lgrey)",
//     color: touched[name] && !errors[name] ? "var(--highlight-lgrey)" : "black",
//     textColor: touched[name] && !errors[name] ? "var(--highlight-lgrey)" : "black",
//     _hover: touched[name] && !errors[name] ? {bg: "#3a4a45"} : {bg: "rgba(237, 239, 238, 0.5)"},
//     animation: touched[name] && errors[name] ? `${shake} 0.5s ease-in-out` : 'none',
//     transition: "all 0.3s ease-in-out",
// });

// const CustomSelect = ({ name, ...props}) => {
//     const { touched, errors } = useFormikContext();
//     return (
//         <Select
//             {...getCustomInputSelectAttributes(name, touched, errors, props)}
//         />
//     );
// };

// const CustomInput = ({ name, ...props}) => {
//     const { touched, errors } = useFormikContext();
//     return (
//         <Input
//             {...getCustomInputSelectAttributes(name, touched, errors, props)}
//         />
//     );
// };

// const CustomFormGroup = ({ name, placeholder, icon, type = 'text', options }) => {
//     return (
//       <Form.Group>
//             <InputGroup className="input-group-with-icon">
//                 {icon && (
//                     <InputGroup.Text addonType="prepend" className="input-group-icon">
//                         <FontAwesomeIcon icon={icon} />
//                     </InputGroup.Text>
//                 )}
//                 <Field name={name}>
//                 {({ field, meta }) => {
//                 if (type === 'select') {
//                     return (
//                     <>
//                         <Form.Select
//                             {...field}
//                             id={name}
//                             invalid={meta.touched && meta.error}
//                             placeholder={placeholder}
//                             className={
//                                 meta.touched &&
//                                 (meta.error ? 'input-invalid' : 'input-valid') + ' input-hover'
//                             }
//                         >
//                             {placeholder && (
//                                 <option value="" disabled hidden>
//                                 {placeholder}
//                                 </option>
//                             )}
//                             {options.map(option => (
//                             <option key={option.value} value={option.value}>
//                                 {option.label}
//                             </option>
//                             ))}
//                         </Form.Select>
//                         <Form.Control.Feedback>
//                         <ErrorMessage name={name} />
//                         </Form.Control.Feedback>
//                     </>
//                     );
//                 } else {
//                     return (
//                     <>
//                         <Form.Control
//                             {...field}
//                             type={type}
//                             id={name}
//                             invalid={meta.touched && meta.error}
//                             placeholder={placeholder}
//                             className={
//                                 meta.touched &&
//                                 (meta.error ? 'input-invalid' : 'input-valid') + ' input-hover'
//                             }
//                         />
//                         <Form.Control.Feedback>
//                         <ErrorMessage name={name} />
//                         </Form.Control.Feedback>
//                     </>
//                     );
//                 }
//                 }}
//             </Field>
//             </InputGroup>
//       </Form.Group>
//     );
//   };


export default function BookingForm(props) {

    const {availableTimes, date, setDate, navigate} = props;

    // const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
    // const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

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
                    date: values.date,
                    time: values.time,
                    occasion: values.occasion,
                    location: values.location,
                    name: values.name,
                    email: values.email,
                    notes: values.notes
                };
                console.log("Form data:", formData);
                submitForm(formData, navigate);
                navigate("/reservation-confirmation", {
                    state: { date: values.date, time: values.time }
                });
            }}
            validateOnChange={true}
        >

                <Form
                    method="post"
                    // style={{ width: `calc(100% - ${scrollbarWidth}px)` }}
                >
                    
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-with-icon">
                                <FontAwesomeIcon icon={faUserGroup} className="input-group-icon" />
                                <Field
                                    as="select"
                                    name="people"
                                    placeholder="Number of people"
                                    className="form-control"
                                  >
                                        <option value="">
                                            Number of people
                                        </option>
                                    <option>1</option>
                                    <option>2</option>
                                </Field>
                            </span>
                            </div>
                        </div>
                    

                                {/* <CustomFormGroup
                                    name="people"
                                    placeholder="Number of People"
                                    label="Number of people"
                                    icon={faUserGroup}
                                    type="select"
                                    options={[...Array(8)].map((_, i) => ({ value: i + 1, label: i + 1 }))}
                                />

                                <CustomFormGroup
                                    name="date"
                                    placeholder="Date"
                                    label="Date"
                                    icon={faCalendarDays}
                                    type="date"
                                    value={date.toISOString().slice(0, 10)}
                                    onChange={(e) => {
                                        // form.setFieldTouched("date");
                                        // field.onChange(e);
                                        handleDateChange(e);
                                        props.dispatch({
                                            type: "changeDate",
                                            payload: new Date(e.target.value)
                                        });
                                    }}
                                />

                                <CustomFormGroup
                                    name="time"
                                    placeholder="Time"
                                    label="Time"
                                    icon={faClock}
                                    type="select"
                                    options={availableTimes && availableTimes.map((time) => ({ value: time, label: time }))}
                                />

                                <CustomFormGroup
                                    name="occasion"
                                    placeholder="Occasion"
                                    label="Occasion"
                                    icon={faChampagneGlasses}
                                    type="select"
                                    options={[
                                        { value: "birthday", label: "Birthday" },
                                        { value: "engagement", label: "Engagement" },
                                        { value: "anniversary", label: "Anniversary" }
                                    ]}
                                />

                                <CustomFormGroup
                                    name="location"
                                    placeholder="Seating location"
                                    label="Seating location"
                                    icon={faChair}
                                    type="select"
                                    options={[
                                        { value: "inside", label: "Inside" },
                                        { value: "outside", label: "Outside" }
                                    ]}
                                />

                                <CustomFormGroup name="name" label="Name" placeholder="Name" icon={faUser} />

                                <CustomFormGroup name="email" label="Email" placeholder="Email" icon={faEnvelope} type="email" />

                                <CustomFormGroup name="notes" label="Notes" placeholder="Notes" icon={faComment} /> */}

                        <button type="submit">Submit</button>

                </Form>

        </Formik>
    );
}