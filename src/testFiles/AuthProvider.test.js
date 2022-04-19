import React from "react";
import renderer from "react-test-renderer";
import { AuthProvider } from "../AuthProvider";

describe("App", () => {
  it("renders without crashing given the required props", () => {
    const wrapper = renderer.create(<AuthProvider />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
