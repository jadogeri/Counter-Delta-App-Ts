import React from 'react'
import ButtonIcon from '../ButtonIcon';
import { fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom";

// Mock styles import
jest.mock("../ButtonIconStyle", () => ({
  image: { width: 24, height: 24 }
}));

// Mock image source
const mockImageSource = { uri: 'https://example.com/icon.png' };

describe('ButtonIcon() ButtonIcon method', () => {
  // Happy Path Tests
  describe('Happy paths', () => {
    test('renders correctly with valid props and displays the image', () => {
      // This test ensures the component renders with all required props and displays the image.
      const { getByTestId, getByRole } = render(
        <ButtonIcon
          image={mockImageSource}
          pressHandler={jest.fn()}
          longPressInHandler={jest.fn()}
          id="test-button"
        />
      );
      const touchable = getByTestId('test-button');
      expect(touchable).toBeInTheDocument();

      // The image should be rendered inside the TouchableOpacity
      const image = getByRole('img');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', mockImageSource.uri);
    });

    test('calls pressHandler when TouchableOpacity is pressed', () => {
      // This test ensures the pressHandler is called when the button is pressed.
      const pressHandler = jest.fn();
      const { getByTestId } = render(
        <ButtonIcon
          image={mockImageSource}
          pressHandler={pressHandler}
          longPressInHandler={jest.fn()}
          id="press-test"
        />
      );
      const touchable = getByTestId('press-test');
      fireEvent.press(touchable);
      expect(pressHandler).toHaveBeenCalledTimes(1);
      expect(pressHandler.mock.calls[0][0]).toBeDefined();
    });

    test('calls longPressInHandler when TouchableOpacity is pressed in', () => {
      // This test ensures the longPressInHandler is called when the button is pressed in.
      const longPressInHandler = jest.fn();
      const { getByTestId } = render(
        <ButtonIcon
          image={mockImageSource}
          pressHandler={jest.fn()}
          longPressInHandler={longPressInHandler}
          id="longpress-test"
        />
      );
      const touchable = getByTestId('longpress-test');
      fireEvent(touchable, 'pressIn');
      expect(longPressInHandler).toHaveBeenCalledTimes(1);
      expect(longPressInHandler.mock.calls[0][0]).toBeDefined();
    });

    test('renders with different image sources', () => {
      // This test ensures the component can render with different image sources.
      const localImageSource = 1; // Simulate a local image resource (number)
      const { getByRole, rerender } = render(
        <ButtonIcon
          image={localImageSource}
          pressHandler={jest.fn()}
          longPressInHandler={jest.fn()}
          id="local-image"
        />
      );
      const image = getByRole('img');
      expect(image).toBeInTheDocument();

      // Rerender with another remote image
      rerender(
        <ButtonIcon
          image={{ uri: 'https://another.com/icon.png' }}
          pressHandler={jest.fn()}
          longPressInHandler={jest.fn()}
          id="remote-image"
        />
      );
      const newImage = getByRole('img');
      expect(newImage).toBeInTheDocument();
      expect(newImage).toHaveAttribute('src', 'https://another.com/icon.png');
    });

    test('passes the correct id to TouchableOpacity testID', () => {
      // This test ensures the id prop is correctly passed to the TouchableOpacity's testID.
      const { getByTestId } = render(
        <ButtonIcon
          image={mockImageSource}
          pressHandler={jest.fn()}
          longPressInHandler={jest.fn()}
          id="unique-id"
        />
      );
      const touchable = getByTestId('unique-id');
      expect(touchable).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe('Edge cases', () => {
    test('does not throw if pressHandler is undefined and button is pressed', () => {
      // This test ensures the component does not throw if pressHandler is undefined.
      const { getByTestId } = render(
        <ButtonIcon
          image={mockImageSource}
          pressHandler={undefined}
          longPressInHandler={jest.fn()}
          id="no-press-handler"
        />
      );
      const touchable = getByTestId('no-press-handler');
      expect(() => fireEvent.press(touchable)).not.toThrow();
    });

    test('does not throw if longPressInHandler is undefined and button is pressed in', () => {
      // This test ensures the component does not throw if longPressInHandler is undefined.
      const { getByTestId } = render(
        <ButtonIcon
          image={mockImageSource}
          pressHandler={jest.fn()}
          longPressInHandler={undefined}
          id="no-longpress-handler"
        />
      );
      const touchable = getByTestId('no-longpress-handler');
      expect(() => fireEvent(touchable, 'pressIn')).not.toThrow();
    });

    test('renders correctly with minimal props (handlers as undefined)', () => {
      // This test ensures the component renders with handlers as undefined.
      const { getByTestId, getByRole } = render(
        <ButtonIcon
          image={mockImageSource}
          pressHandler={undefined}
          longPressInHandler={undefined}
          id="minimal"
        />
      );
      const touchable = getByTestId('minimal');
      expect(touchable).toBeInTheDocument();
      const image = getByRole('img');
      expect(image).toBeInTheDocument();
    });

    test('handles unusual id values', () => {
      // This test ensures the component can handle unusual id values.
      const { getByTestId } = render(
        <ButtonIcon
          image={mockImageSource}
          pressHandler={jest.fn()}
          longPressInHandler={jest.fn()}
          id="!@#$%^&*()_+|"
        />
      );
      const touchable = getByTestId('!@#$%^&*()_+|');
      expect(touchable).toBeInTheDocument();
    });

    test('handles image prop as a number (local resource)', () => {
      // This test ensures the image prop can be a number (local resource).
      const localImageSource = 123;
      const { getByRole } = render(
        <ButtonIcon
          image={localImageSource}
          pressHandler={jest.fn()}
          longPressInHandler={jest.fn()}
          id="number-image"
        />
      );
      const image = getByRole('img');
      expect(image).toBeInTheDocument();
    });
  });
});