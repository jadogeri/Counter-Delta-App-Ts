import { ButtonIcon } from "../../src/components";
import { render, fireEvent } from "@testing-library/react-native";

/**
 * @jest-environment jsdom
 */
// the above comment helps
describe("ButtonIcon",() =>{
    test("calls onPress function when button is pressed", () =>{
        const mockOnPress = jest.fn();

        const {getByTestId} = render(<ButtonIcon pressHandler={mockOnPress} id='test' image={0} longPressInHandler={undefined}/>)
        const pressMeButton = getByTestId('test');
        fireEvent.press(pressMeButton)

        expect(mockOnPress).toHaveBeenCalled();
    })

});