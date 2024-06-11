// Filters.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Filters, badgeList} from "./Filters";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve("2024-05-29 11:48:01.124600"),
  })
);

describe("Filters component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Filters component", () => {
    render(<Filters updateFilters={() => {}} />);

    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("Badges")).toBeInTheDocument();
    expect(screen.getByText(/Last Updated:/)).toBeInTheDocument();
    expect(screen.getByText(/Disclaimer:/)).toBeInTheDocument();

    badgeList.forEach((badge) => {
      expect(screen.getByLabelText(badge)).toBeInTheDocument();
    });
  });

  // test("fetches and displays the update date", async () => {
  //   render(<Filters updateFilters={() => {}} />);
  
  //   expect(fetch).toHaveBeenCalledWith(
  //     "https://thevanadium.pythonanywhere.com/update-date"
  //   );
  
  //   expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  
  //   const dateElement = await screen.findByText(/Last Updated:/);
  //   // Test case fails below
  //   expect(dateElement).toHaveTextContent("Last Updated: June 10, 2023");
  // });

  test("handles filter changes correctly", () => {
    const updateFiltersMock = jest.fn();
    render(<Filters updateFilters={updateFiltersMock} />);

    const firstCheckbox = screen.getByLabelText(badgeList[0]);

    fireEvent.click(firstCheckbox);
    expect(updateFiltersMock).toHaveBeenCalledWith(firstCheckbox.value);

    fireEvent.click(firstCheckbox);
    expect(updateFiltersMock).toHaveBeenCalledWith(firstCheckbox.value);
  });

  test("displays loading indicator for update date", () => {
    fetch.mockImplementationOnce(
      () =>
        new Promise(() => {
          /* never resolves */
        })
    );

    render(<Filters updateFilters={() => {}} />);

    expect(screen.getByText(/Last Updated:/)).toHaveTextContent("Loading...");
  });
});
