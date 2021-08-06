import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";


describe("<Cell /> rendering", () => {

    describe("Initial board and win state", () => {

        it("renders correctly without crashing", () => {
            render(<Board />)
        });
        
        it("matches snapshot when all lights are on", () => {
            const { asFragment } = render(<Board chanceLightStartsOn={1} />);
            expect(asFragment()).toMatchSnapshot();
        });

        it("matches snapshot when all lights are out", () => {
            const { asFragment } = render(<Board chanceLightStartsOn={0} />);
            expect(asFragment()).toMatchSnapshot();
        });

    })

    // describe("When cells are clicked", () => {

    //     it("says  you won when all lights are turned off", () => {
    //         const { queryByText, getAllByRole }  = render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);

    //         // The winning message is not supposed to be in the document as presently rendered 

    //         expect(queryByText("You won the game!")).not.toBeInTheDocument();

    //         // Now we click the middle cell which will toggle all other cells off and we expect 
    //         // the win message to be in the document.

    //         const cells = getAllByRole("button");
    //         fireEvent.click(cells[1]);
    //         expect(queryByText("You won the game!")).toBeInTheDocument();

    //     });

    // })



});