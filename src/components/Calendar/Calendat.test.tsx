import React from "react";
import { render } from "@testing-library/react";

import Calendar from "./Calendar";

describe("Calendar", () => {
  test("renders the Calendar component", () => {
    render(<Calendar type="month" />);
  });
});
