    // components/MyComponent.tsx
    import React from 'react';
    import { Text, View } from 'react-native';

    interface MyComponentProps {
      message: string;
    }

    const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
      return (
        <View>
          <Text>{message}</Text>
        </View>
      );
    };

    export default MyComponent;