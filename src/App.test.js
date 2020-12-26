import React from "react";
import { toHaveStyle } from "@testing-library/jest-dom";
import { fireEvent, screen, render } from "@testing-library/react";

import App from "./App";
import image from "./assets/vir.png";

describe("<Button />", () => {
  it("checking if the background is being rendered", () => {
    const { container } = render(<App background={image} />);

    expect(container.firstChild).toHaveStyle(`background-image: url(${image}`);
  });
});
