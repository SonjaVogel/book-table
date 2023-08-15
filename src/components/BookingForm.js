import { useEffect, useReducer, useState } from "react";
import DatePicker from "react-datepicker";
import {
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	keyframes,
	Select,
	SimpleGrid,
	useMediaQuery,
} from "@chakra-ui/react";
import { Field, Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { submitForm, updateTimes } from "../utils/formUtils";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datepicker/dist/react-datepicker.css";

const today = new Date();

const validationSchema = Yup.object().shape({
	people: Yup.number()
		.min(1, "At least one person is required")
		.max(8, "Maximum 8 people are allowed")
		.required("Number of people is required"),
	date: Yup.date()
		.transform((_, originalValue) => new Date(originalValue))
		.min(today - 86400000, "Date must be in the future")
		.required("Date is required"),
	time: Yup.string().required("Time is required"),
	occasion: Yup.string().oneOf(
		["birthday", "engagement", "anniversary"],
		"Invalid occasion",
	),
	location: Yup.string()
		.oneOf(["inside", "outside"], "Invalid location")
		.required("Seating location is required"),
	name: Yup.string()
		.min(2, "At least 2 characters required")
		.required("Name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	notes: Yup.string(),
});

const initialValues = {
	people: "",
	date: today.toISOString().slice(0, 10),
	time: "",
	occasion: "",
	location: "",
	name: "",
	email: "",
	notes: "",
};

const CustomIcon = ({ name, icon, ...props }) => {
	const { touched, errors } = useFormikContext();
	return (
		<i
			{...props}
			className={"fas fa-xl fa-" + icon}
			aria-hidden="true"
			style={{
				color: touched[name] && !errors[name] ? "white" : "black",
			}}
		></i>
	);
};

const shake = keyframes`
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
    100% { transform: translateX(0); }
`;

const getCustomInputSelectAttributes = (name, touched, errors, props) => ({
	...props,
	name,
	className: "custom-form-field",
	option: {
		"&:hover": {
			backgroundColor: "var(--highlight-dgrey)",
		},
	},
	bg:
		touched[name] && !errors[name]
			? "var(--primary-green)"
			: "var(--highlight-lgrey)",
	color: touched[name] && !errors[name] ? "white" : "black",
	textColor: touched[name] && !errors[name] ? "white" : "black",
	_hover:
		touched[name] && !errors[name]
			? { bg: "#3a4a45" }
			: { bg: "rgba(237, 239, 238, 0.5)" },
	animation:
		touched[name] && errors[name] ? `${shake} 0.5s ease-in-out` : "none",
	transition: "all 0.3s ease-in-out",
});

const CustomSelect = ({ name, ...props }) => {
	const { touched, errors } = useFormikContext();
	return (
		<Select
			{...getCustomInputSelectAttributes(name, touched, errors, props)}
		/>
	);
};

const CustomInput = ({ name, ...props }) => {
	const { touched, errors } = useFormikContext();
	return (
		<Input
			{...getCustomInputSelectAttributes(name, touched, errors, props)}
			_placeholder={{
				color: touched[name] && !errors[name] ? "white" : "#6E6F6E",
			}}
		/>
	);
};

const CustomBox = ({ icon, name, type, placeholder, options, onChange }) => {
	const { errors, touched } = useFormikContext();
	return (
		<Box className="chakra-box">
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<CustomIcon icon={icon} name={name} />
				</InputLeftElement>
				<Field name={name}>
					{({ field, form }) =>
						type === "select" ? (
							<CustomSelect
								{...field}
								placeholder={placeholder}
								aria-label={placeholder}
								aria-errormessage={`${name}-error`}
								aria-invalid={errors[name] || touched[name]}
								onChange={e => {
									form.setFieldTouched(name);
									form.handleChange(e);
									if (onChange) onChange(e);
								}}
							>
								{options &&
									options.map(option => (
										<option
											key={option.value}
											value={option.value}
										>
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
								onChange={e => {
									form.setFieldTouched(name);
									form.handleChange(e);
									if (onChange) onChange(e);
								}}
							/>
						)
					}
				</Field>
			</InputGroup>
			{errors[name] && touched[name] && (
				<Box
					id={`${name}-error`}
					className="error-message"
					role="alert"
				>
					{errors[name]}
				</Box>
			)}
		</Box>
	);
};

export default function BookingForm(props) {
	const { navigate } = props;

	const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
	const scrollbarWidth =
		window.innerWidth - document.documentElement.clientWidth;

	const [date, setDate] = useState(new Date());
	const [availableTimes, dispatch] = useReducer(updateTimes, []);

	useEffect(() => {
		dispatch({ type: "changeDate", payload: new Date() });
	}, []); // Empty array as second parameter to run effect only once

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={values => {
				const formData = {
					people: values.people,
					date: values.date,
					time: values.time,
					occasion: values.occasion,
					location: values.location,
					name: values.name,
					email: values.email,
					notes: values.notes,
				};
				console.log("Form data:", formData);
				submitForm(formData, navigate);
				navigate("/reservation-confirmation", {
					state: { date: values.date, time: values.time },
				});
			}}
			validateOnChange={true}
		>
			{({ errors, touched }) => (
				<Form
					method="post"
					style={{ width: `calc(100% - ${scrollbarWidth}px)` }}
				>
					<SimpleGrid
						minChildWidth={isLargerThan768 ? "340px" : "100%"}
						spacing="24px"
						className="chakra-simple-grid" // Needed for centering form fields on real mobile, not visible in dev-tools
						zIndex={1}
					>
						<CustomBox
							icon="user-group"
							name="people"
							type="select"
							placeholder="Number of people"
							options={[...Array(8)].map((_, i) => ({
								value: i + 1,
								label: i + 1,
							}))}
						/>
						<Box className="chakra-box">
							<InputGroup zIndex={1}>
								<InputLeftElement pointerEvents="none">
									<CustomIcon
										icon="calendar-days"
										name="date"
									/>
								</InputLeftElement>
								<Field name="date">
									{({ field, form }) => (
										<DatePicker
											className={`datepicker ${
												touched.date ? "touched" : ""
											} ${errors.date ? "" : "no-error"}`}
											dateFormat="d MMMM yyyy"
											placeholderText="Date"
											selected={date}
											aria-label="Date"
											aria-errormessage="date-error"
											aria-invalid={
												errors.date || touched.date
											}
											onFocus={e => e.target.blur()}
											onChange={date => {
												form.setFieldTouched("date");
												form.setFieldValue(
													"date",
													date,
												);
												setDate(date);
												dispatch({
													type: "changeDate",
													payload: date,
												});
											}}
										/>
									)}
								</Field>
							</InputGroup>
							{errors.date && touched.date && (
								<Box
									id="date-error"
									className="error-message"
									role="alert"
								>
									{errors.date}
								</Box>
							)}
						</Box>
						<CustomBox
							icon="clock"
							name="time"
							type="select"
							placeholder="Time"
							options={
								availableTimes &&
								availableTimes.map(time => ({
									value: time,
									label: time,
								}))
							}
						/>
						<CustomBox
							icon="champagne-glasses"
							name="occasion"
							type="select"
							placeholder="Occasion"
							options={[
								{ value: "birthday", label: "Birthday" },
								{ value: "engagement", label: "Engagement" },
								{ value: "anniversary", label: "Anniversary" },
							]}
						/>
						<CustomBox
							icon="chair"
							name="location"
							type="select"
							placeholder="Seating location"
							options={[
								{ value: "inside", label: "Inside" },
								{ value: "outside", label: "Outside" },
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
						<button
							type="submit"
							style={{ marginTop: "48px" }}
							className="reserve-table-button"
						>
							Reserve table
						</button>
					</SimpleGrid>
				</Form>
			)}
		</Formik>
	);
}
