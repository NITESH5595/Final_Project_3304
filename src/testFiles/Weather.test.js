import React from "react";
import Weather from "../Weather";
import renderer from "react-test-renderer";

describe("App", () => {
  it("renders without crashing given the required props", () => {
    const wrapper = renderer.create(<Weather />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
