import React from "react";
import renderer from "react-test-renderer";
import Services from "../Services";

describe("App", () => {
  it("renders without crashing given the required props", () => {
    // const props = {

    const wrapper = renderer.create(<Services />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
