import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";
import Home from "./Home";
import Weather from "./Weather";
import Login from "./Login";
import About from "./AboutUs";
import Services from "./Services";
import Customers from "./Customers";

describe("App", () => {
  it("renders without crashing given the required props", () => {
    // const props = {
    //   isFetching: false,
    //   dispatch: jest.fn(),
    //   selectedSubreddit: "reactjs",
    //   posts: [],
    // };

    const wrapper1 = shallow(<App />);
    const wrapper2 = shallow(<About />);
    const wrapper3 = shallow(<Services />);
    const wrapper4 = shallow(<Customers />);
    expect(toJson(wrapper1)).toMatchSnapshot();
    expect(toJson(wrapper2)).toMatchSnapshot();
    expect(toJson(wrapper3)).toMatchSnapshot();
    expect(toJson(wrapper4)).toMatchSnapshot();
  });
});
