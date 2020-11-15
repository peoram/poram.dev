import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders poram.dev", () => {
  render(<App />);
  screen.getByText(/Paul Oram/);
});
