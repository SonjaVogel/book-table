import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

// Test if the form is submitted with correct data when clicking on the submit button
test("should submit the form with correct data when clicking on the submit button", () => {
  // Create a mock function for the handleSubmit prop
  const handleSubmit = jest.fn();

  // Render the Main component with the mock function as the handleSubmit prop
  render(
      <BookingForm handleSubmit={handleSubmit} />
  );

  // Click on the "Reserve a table" link to render the BookingPage component
  userEvent.click(screen.getByText("Reserve a table"));

  // Select a date from the date picker
  userEvent.click(screen.getByLabelText("Date"));
  userEvent.click(screen.getByText("15"));

  // Select a time from the select menu
  userEvent.selectOptions(screen.getByLabelText("Time"), "18:00");

  // Enter some notes in the input field
  userEvent.type(screen.getByPlaceholderText("Notes"), "Some notes");

  // Click on the submit button
  userEvent.click(screen.getByText("Reserve Table"));

  // Expect the handleSubmit mock function to be called once with the correct data
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    date: "2023-06-15",
    time: "18:00",
    notes: "Some notes",
  });
});