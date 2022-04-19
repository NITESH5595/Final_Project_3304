import React from "react";
import renderer from "react-test-renderer";
import Customers from "../Customers";

describe("App", () => {
  it("renders without crashing given the required props", () => {
    // const props = {

    const wrapper = renderer.create(<Customers />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
