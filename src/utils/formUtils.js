import { fetchAPI, submitAPI } from '../api.js';

export const updateTimes = (state, action) => {
    switch (action.type) {
      case "changeDate":
        return fetchAPI(action.payload);
      default:
        throw new Error("Invalid action type");
    }
  }

export const submitForm = (formData, navigate) => {
    const response = submitAPI(formData);
    if (response) {
        navigate("/reservation-confirmation");
    }
};
