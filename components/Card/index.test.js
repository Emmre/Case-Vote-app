import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "pages";

describe("Card Component", () => {
  it("Should be rendering", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("home-page")).toBeInTheDocument();
  });
  it("Should be snapshot", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("home-page")).toMatchSnapshot();
  });
});
