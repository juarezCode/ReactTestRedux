import { configure, shallow } from "enzyme";
import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Form } from "./Form";

configure({ adapter: new Adapter() });

describe("Form", () => {
  it("add finanza", () => {
    const agregarFinanza = jest.fn();
    const prevent = jest.fn();
    const wrapper = shallow(<Form agregarFinanza={agregarFinanza} />);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "description" } });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value: "100" } });

    wrapper.find("form").simulate("submit", { preventDefault: prevent });

    expect(agregarFinanza.mock.calls).toEqual([
      [{ desc: "description", cant: 100 }],
    ]);

    expect(prevent.mock.calls).toEqual([[]]);
  });
});
