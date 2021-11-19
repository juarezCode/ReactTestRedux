import { configure, shallow } from "enzyme";
import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Finanzas } from "./Finanzas";

configure({ adapter: new Adapter() });

describe("Finanzas component", () => {
  it("call eliminarFinanza onClick", () => {
    const finanzas = [
      { desc: "Finanza1", cant: 100 },
      { desc: "Finanza2", cant: 30 },
    ];

    const eliminarFinanza = jest.fn();

    const wrapper = shallow(
      <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
    );

    wrapper.find("button").at(0).simulate("click");

    expect(eliminarFinanza.mock.calls).toEqual([[0]]);
    const hasText1 = wrapper.text().includes("Finanza1");
    const hasText2 = wrapper.text().includes("Finanza2");

    expect(hasText1).toEqual(true);
    expect(hasText2).toEqual(true);
  });
});
