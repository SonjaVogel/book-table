import { updateTimes } from "./Main";


// Test the updateTimes function
test("updateTimes function should return a new array of times based on the action type and payload", () => {
  // Define the initial state for the availableTimes
  const initialTimes = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

  // Define an action object with type "changeDate" and payload "2023-06-14"
  const action = {
    type: "changeDate",
    payload: "2023-06-14",
  };

  // Call the updateTimes function with the initial state and the action object
  const newTimes = updateTimes(initialTimes, action);

  // Expect the newTimes array to be equal to the initialTimes array
  expect(newTimes).toEqual(initialTimes);

  // Optionally, you can add more test cases with different action types and payloads
});
