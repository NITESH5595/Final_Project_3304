import React from "react";
import App from "../App";
import renderer from "react-test-renderer";
import { AuthProvider } from "../AuthProvider";
import { Services } from "../Services";

describe("App", () => {
  it("renders without crashing given the required props", () => {
    const wrapper1 = renderer.create(<App />).toJSON();
    expect(wrapper1).toMatchSnapshot();
    const wrapper = renderer.create(<AuthProvider />).toJSON();
    expect(wrapper).toMatchSnapshot();

    // const wrapper1 = shallow(<App />);

    // const wrapper2 = shallow(<Services />);

    // const wrapper3 = shallow(<Customers />);

    // expect(toJson(wrapper1)).toMatchSnapshot();

    // expect(toJson(wrapper2)).toMatchSnapshot();

    // expect(toJson(wrapper3)).toMatchSnapshot();
  });
});
