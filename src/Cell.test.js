import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";

describe("<Cell /> rendering", () => {
    let container;

beforeEach(() =>{
// We need to add a <tr> element to the cell we are rendring 
// if not react will produce a a warning about appending a
// TD straight to a div.
    let tr = document.createElement("tr");
    container = document.body.appendChild(tr);  

});

it("renders correctly without crashing", () => {
    render(<Cell />, { container })
});

it("matches snapshot when lit", () => {
    const { asFragment } = render(<Cell isLit />, { container });
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when not lit", () => {
    const { asFragment } = render(<Cell />, { container });
    expect(asFragment()).toMatchSnapshot();
});



});