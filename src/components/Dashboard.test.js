import { configure, shallow } from "enzyme";
import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Dashboard } from "./Dashboard";

configure({ adapter: new Adapter() });

describe("Dashboard", () => {
  it("show value", () => {
    const wrapper = shallow(<Dashboard valor={1000} />);
    const hasMyValue = wrapper.text().includes("1000");

    expect(hasMyValue).toEqual(true);
  });
});
