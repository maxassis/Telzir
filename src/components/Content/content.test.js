import React from "react";
import { toHaveStyle } from "@testing-library/jest-dom";
import { fireEvent, screen, render } from "@testing-library/react";

import Content from "./index";

describe("<Button />", () => {
  it("checking the minute button styles", () => {
    const {} = render(<Content />);

    expect(screen.getByRole("button", { name: /5 min/i })).toHaveStyle({
      background: "ffffff padding-box",
      "border-radius": "5px",
      opacity: 1,
      width: "22%",
      height: "40px",
    });
  });

  it("checking the input styles", () => {
    const {} = render(<Content />);

    expect(screen.getByPlaceholderText("0min")).toHaveStyle({
      width: "11.091rem",
      "text-align": "center",
      font: "bold 32px Poppins",
    });
  });

  it("checking the heading styles", () => {
    const {} = render(<Content />);

    expect(screen.getByRole("heading", { name: /abaixo/i })).toHaveStyle({
      "text-align": "center",
      font: "18px Poppins",
      "letter-spacing": "0px",
      color: "#3f51b5",
      opacity: 1,
    });
  });

  it("check if the submit button is calling the function", () => {
    const {} = render(<Content />);

    const form = screen.getByTestId("form");
    fireEvent.submit(form);

    expect(screen.getByTestId("form")).toBeTruthy();
  });
});
