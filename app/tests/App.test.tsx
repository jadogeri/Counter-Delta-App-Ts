import { render } from '@testing-library/react-native';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders the correct message', () => {
    const { getByText } = render(<MyComponent message="Hello Expo!" />);
    expect(getByText('Hello Expo!')).toBeDefined();
  });
});
