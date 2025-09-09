import { ResetButton } from "../../src/components";
import { render, fireEvent } from "@testing-library/react-native";

/**
 * @jest-environment jsdom
 */
// the above comment helps
describe("ResetButton",() =>{
    it("calls onPress function when button is pressed", () =>{
        const mockOnPress = jest.fn();

        const {getByTestId} = render(<ResetButton pressHandler={mockOnPress} id='reset' title={""}/>)
        const pressMeButton = getByTestId('reset');
        fireEvent.press(pressMeButton)

        expect(mockOnPress).toHaveBeenCalled();
    })

});