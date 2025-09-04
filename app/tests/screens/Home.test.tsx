import React from "react"
import Home from "../../src/screens/Home/HomeScreen";
import { render, fireEvent, screen } from "@testing-library/react-native";

describe("ResetButton",() =>{
    it("calls first reset onPress function when button is pressed", () =>{
        render(<Home /> )
        const pressMeButton = screen.getByTestId('reset1');
        fireEvent.press(pressMeButton)

    }),
    it("calls  second reset buttononPress function when button is pressed", () =>{
        render(<Home />)
        const pressMeButton = screen.getByTestId('reset2');
        fireEvent.press(pressMeButton)

    });
    it("calls first delta component onPress function when button is pressed", () =>{
        render(<Home />)

        const pressMeButton = screen.getByTestId('delta1');
        fireEvent.press(pressMeButton)

    }),
    it("calls  second delta component buttononPress function when button is pressed", () =>{
        render(<Home />)

        const pressMeButton = screen.getByTestId('delta2');
        fireEvent.press(pressMeButton)
    })
    it("calls Button Icon  1in Home and pressed", () =>{
        render(<Home />)

        const pressMeButton = screen.getByTestId('b1');
        fireEvent.press(pressMeButton)
    })
    it("calls Button Icon  1in Home and pressed", () =>{
        render(<Home />)

        const pressMeButton = screen.getByTestId('b2');
        fireEvent.press(pressMeButton)
    })

});

