// Application.test.js

import React from "react";
import { render, fireEvent, cleanup, waitFor, getAllByTestId, getByText, getByAltText, getByPlaceholderText, queryByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Application from "../Application";
import axios from 'axios';

jest.mock('axios');

describe("Application", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    axios.get.mockResolvedValueOnce({
      data: {
        days: [
          { id: 1, name: "Monday", appointments: [1, 2], interviewers: [1, 2], spots: 1 },
          { id: 2, name: "Tuesday", appointments: [3, 4], interviewers: [3, 4], spots: 2 }
        ],
        appointments: {
          "1": { id: 1, time: "12pm", interview: null },
          "2": { id: 2, time: "1pm", interview: { student: "Archie Cohen", interviewer: 2 } },
          "3": { id: 3, time: "2pm", interview: { student: "Leopold Silvers", interviewer: 4 } },
          "4": { id: 4, time: "3pm", interview: null }
        },
        interviewers: {
          "1": { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
          "2": { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
          "3": { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
          "4": { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" }
        }
      }
    });
  });

  afterEach(cleanup);

  it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    // Keep the existing test as is
  });

  it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
    axios.delete.mockResolvedValueOnce({});
    // Add implementation for cancel test here
  });

  it("loads data, edits an interview and keeps the spots remaining for Monday the same", async () => {
    // Add implementation for edit test here
  });

  it("shows the save error when failing to save an appointment", async () => {
    axios.put.mockRejectedValueOnce(new Error("Async error"));
    // Add implementation for save error test here
  });

  it("shows the delete error when failing to delete an existing appointment", async () => {
    axios.delete.mockRejectedValueOnce(new Error("Async error"));
    // Add implementation for delete error test here
  });
});
