
import React from 'react';
import DeltaButton from '../DeltaButton';

// DeltaButton.test.tsx
import { fireEvent, render, screen } from '@testing-library/react-native';
import "@testing-library/jest-dom";

// DeltaButton.test.tsx
// --- Mocks for dependencies ---

// Mock for styles
const mockStyles = {
  button: { padding: 10 },
  sign: { fontWeight: 'bold' }
};
jest.mock("../DeltaButtonStyle", () => mockStyles);

// Mock for MaterialCommunityIcons
jest.mock("react-native-vector-icons/MaterialCommunityIcons", () => {
  return (props: any) => <span data-testid="mock-delta-icon">{props.name}</span>;
});

// Mock for Button from react-native-paper
class MockButton extends React.Component<any> {
  public static displayName = 'MockButton';
  render() {
    // Simulate the Button by rendering children and passing onPress
    return (
      <button
        data-testid={this.props.testID}
        style={this.props.style}
        onClick={this.props.onPress}
      >
        {this.props.children}
      </button>
    );
  }
}
jest.mock("react-native-paper", () => {
  return {
    Button: MockButton as any,
    Text: (props: any) => <span {...props} />
  };
});

// --- Begin Test Suite ---

describe('DeltaButton() DeltaButton method', () => {
  // Happy Path Tests
  describe('Happy Paths', () => {
    it('renders correctly with typical props and displays sign and delta icon', () => {
      // This test ensures the component renders with expected props and displays children.
      const sign = '+';
      const color = 'red';
      const id = 'delta-btn-1';
      const pressHandler = jest.fn();
      render(
        <DeltaButton
          sign={sign}
          color={color}
          pressHandler={pressHandler}
          id={id}
        />
      );
      // Button should be rendered with correct testID
      const button = screen.getByTestId(id);
      expect(button).toBeVisible();
      // Delta icon should be rendered
      expect(screen.getByTestId('mock-delta-icon')).toBeVisible();
      // Sign should be rendered
      expect(screen.getByText(sign)).toBeVisible();
      // Button should have correct style
      expect(button.props.style).toHaveProperty(`background-color: ${color}`);
    });

    it('calls pressHandler when button is clicked', () => {
      // This test ensures the pressHandler is called when the button is pressed.
      const sign = '-';
      const color = 'blue';
      const id = 'delta-btn-2';
      const pressHandler = jest.fn();
      render(
        <DeltaButton
          sign={sign}
          color={color}
          pressHandler={pressHandler}
          id={id}
        />
      );
      const button = screen.getByTestId(id);
      fireEvent.click(button);
      expect(jest.mocked(pressHandler)).toHaveBeenCalledTimes(1);
    });

    it('renders with different sign and color props', () => {
      // This test checks rendering with alternate props.
      const sign = 'Δ';
      const color = 'green';
      const id = 'delta-btn-3';
      const pressHandler = jest.fn();
      render(
        <DeltaButton
          sign={sign}
          color={color}
          pressHandler={pressHandler}
          id={id}
        />
      );
      expect(screen.getByText(sign)).toBeVisible();
      const button = screen.getByTestId(id);
      expect(button.props.style.backgroundColor).toBe(color);
    });

    it('passes the id prop as testID to the Button', () => {
      // This test ensures the id prop is correctly passed as testID.
      const sign = '>';
      const color = 'yellow';
      const id = 'unique-id-123';
      const pressHandler = jest.fn();
      render(
        <DeltaButton
          sign={sign}
          color={color}
          pressHandler={pressHandler}
          id={id}
        />
      );
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('renders with empty string as sign', () => {
      // This test checks rendering when sign is an empty string.
      const sign = '';
      const color = 'purple';
      const id = 'delta-btn-empty-sign';
      const pressHandler = jest.fn();
      render(
        <DeltaButton
          sign={sign}
          color={color}
          pressHandler={pressHandler}
          id={id}
        />
      );
      // Should render the delta icon and an empty sign
      expect(screen.getByTestId('mock-delta-icon')).toBeInTheDocument();
      // The sign span should exist but be empty
      const signSpan = screen.getByTestId(id).querySelector('span');
      expect(signSpan).toBeInTheDocument();
      expect(signSpan).toHaveTextContent('');
    });

    it('renders with unusual color value', () => {
      // This test checks rendering with a non-standard color value.
      const sign = '!';
      const color = '#123456';
      const id = 'delta-btn-weird-color';
      const pressHandler = jest.fn();
      render(
        <DeltaButton
          sign={sign}
          color={color}
          pressHandler={pressHandler}
          id={id}
        />
      );
      const button = screen.getByTestId(id);
      expect(button).toHaveStyle(`background-color: ${color}`);
    });

    it('does not throw if pressHandler is not provided', () => {
      // This test ensures the component does not throw if pressHandler is undefined.
      const sign = '?';
      const color = 'orange';
      const id = 'delta-btn-no-handler';
      render(
        <DeltaButton
          sign={sign}
          color={color}
          pressHandler={undefined}
          id={id}
        />
      );
      const button = screen.getByTestId(id);
      // Clicking should not throw, but nothing happens
      expect(() => fireEvent.click(button)).not.toThrow();
    });

    it('renders with long sign string', () => {
      // This test checks rendering with a long sign string.
      const sign = 'LONG_SIGN_STRING_1234567890';
      const color = 'cyan';
      const id = 'delta-btn-long-sign';
      const pressHandler = jest.fn();
      render(
        <DeltaButton
          sign={sign}
          color={color}
          pressHandler={pressHandler}
          id={id}
        />
      );
      expect(screen.getByText(sign)).toBeInTheDocument();
    });

    it('renders with special characters in sign', () => {
      // This test checks rendering with special characters in sign.
      const sign = '@#$%^&*()';
      const color = 'magenta';
      const id = 'delta-btn-special-sign';
      const pressHandler = jest.fn();
      render(
        <DeltaButton
          sign={sign}
          color={color}
          pressHandler={pressHandler}
          id={id}
        />
      );
      expect(screen.getByText(sign)).toBeInTheDocument();
    });
  });
});