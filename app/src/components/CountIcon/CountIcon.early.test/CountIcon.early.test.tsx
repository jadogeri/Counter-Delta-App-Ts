import CountIcon from '../CountIcon';


// CountIcon.test.tsx

import '@testing-library/jest-dom';
import { render } from '@testing-library/react-native';


// CountIcon.test.tsx
// Mock styles import
jest.mock("../CountIconStyle", () => ({
  container: { padding: 10 },
  icon: { fontSize: 16 },
}));



// the above comment helps
describe('CountIcon() CountIcon method', () => {
  // Happy Path Tests
  describe('Happy Paths', () => {
    it('renders the count inside a Text component and applies correct style for count = 0 (should be black)', () => {
      // This test checks that when count is 0, the color is black.
      const { getByText } = render(<CountIcon count={0} />);
      const textElement = getByText('0');
      expect(textElement.props.style).toEqual(
        expect.arrayContaining([
          { fontSize: 16 },
          { color: 'black' },
        ])
      );
    });

    it('renders the count inside a Text component and applies correct style for count > 0 (should be blue)', () => {
      // This test checks that when count is positive, the color is blue.
      const { getByText } = render(<CountIcon count={5} />);
      const textElement = getByText('5');
      expect(textElement.props.style).toEqual(
        expect.arrayContaining([
          { fontSize: 16 },
          { color: 'blue' },
        ])
      );
    });

    it('renders the count inside a Text component and applies correct style for count < 0 (should be red)', () => {
      // This test checks that when count is negative, the color is red.
      const { getByText } = render(<CountIcon count={-3} />);
      const textElement = getByText('-3');
      expect(textElement.props.style).toEqual(
        expect.arrayContaining([
          { fontSize: 16 },
          { color: 'red' },
        ])
      );
    });

    it('applies additional style prop to the Text component', () => {
      // This test checks that the style prop from parent is merged into the Text style.
      const customStyle = { fontWeight: 'bold', fontSize: 20 };
      const { getByText } = render(<CountIcon count={1} style={customStyle} />);
      const textElement = getByText('1');
      expect(textElement.props.style).toEqual(
        expect.arrayContaining([
          { fontSize: 16 },
          { color: 'blue' },
          customStyle,
        ])
      );
    });

    it('renders the View container with the correct style', () => {
      // This test checks that the View container uses the correct style.
      const { UNSAFE_getByType } = render(<CountIcon count={2} />);
      const viewElement = UNSAFE_getByType('View');
      expect(viewElement.props.style).toEqual({ padding: 10 });
    });

    it('renders the correct count value as text', () => {
      // This test checks that the count value is rendered as text.
      const { getByText } = render(<CountIcon count={42} />);
      expect(getByText('42')).toBeTruthy();
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('renders with a very large positive count', () => {
      // This test checks rendering with a large positive number.
      const largeCount = 999999999;
      const { getByText } = render(<CountIcon count={largeCount} />);
      const textElement = getByText(largeCount.toString());
      expect(textElement.props.style).toEqual(
        expect.arrayContaining([
          { fontSize: 16 },
          { color: 'blue' },
        ])
      );
    });

    it('renders with a very large negative count', () => {
      // This test checks rendering with a large negative number.
      const largeNegativeCount = -999999999;
      const { getByText } = render(<CountIcon count={largeNegativeCount} />);
      const textElement = getByText(largeNegativeCount.toString());
      expect(textElement.props.style).toEqual(
        expect.arrayContaining([
          { fontSize: 16 },
          { color: 'red' },
        ])
      );
    });

    it('renders with a floating point count', () => {
      // This test checks rendering with a floating point number.
      const floatCount = 3.14;
      const { getByText } = render(<CountIcon count={floatCount} />);
      const textElement = getByText(floatCount.toString());
      expect(textElement.props.style).toEqual(
        expect.arrayContaining([
          { fontSize: 16 },
          { color: 'blue' },
        ])
      );
    });

    it('renders with a negative floating point count', () => {
      // This test checks rendering with a negative floating point number.
      const floatCount = -2.718;
      const { getByText } = render(<CountIcon count={floatCount} />);
      const textElement = getByText(floatCount.toString());
      expect(textElement.props.style).toEqual(
        expect.arrayContaining([
          { fontSize: 16 },
          { color: 'red' },
        ])
      );
    });

   
    it('renders with count as a very small number (close to zero but positive)', () => {
      // This test checks rendering with a small positive number.
      const smallCount = 0.0001;
      const { getByText } = render(<CountIcon count={smallCount} />);
      const textElement = getByText(smallCount.toString());
      expect(textElement.props.style).toEqual(
        expect.arrayContaining([
          { fontSize: 16 },
          { color: 'blue' },
        ])
      );
    });

    it('renders with count as a very small negative number (close to zero but negative)', () => {
      // This test checks rendering with a small negative number.
      const smallNegativeCount = -0.0001;
      const { getByText } = render(<CountIcon count={smallNegativeCount} />);
      const textElement = getByText(smallNegativeCount.toString());
      expect(textElement.props.style).toEqual(
        expect.arrayContaining([
          { fontSize: 16 },
          { color: 'red' },
        ])
      );
    });
  });
});