import React from "react";
import About from "../AboutUs";
import renderer from "react-test-renderer";

describe("App", () => {
  it("renders without crashing given the required props", () => {
    const wrapper = renderer.create(<About />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
