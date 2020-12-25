import React from "react";
import { toHaveStyle } from "@testing-library/jest-dom";
import { fireEvent, screen, render } from "@testing-library/react";

import Conditional from "./index";

describe("<Conditional />", () => {
  it("testing if the component is appearing and disappearing", () => {
    const { container } = render(<Conditional when={true} />);

    const testMessage = "Test Message";

    const { queryByText, getByLabelText, getByText } = render(
      <Conditional when={true}>{testMessage}</Conditional>
    );
  });
});
