import { Button, Text } from 'react-native-paper'
import React from 'react';
import { TouchableOpacity, Image, View, GestureResponderEvent } from 'react-native';
import styles from './ResetButtonStyle'

type ResetButtonProps ={
  title: string,
  pressHandler: ((e: GestureResponderEvent) => void) | undefined,
  id: string

}
const ResetButton : React.FC<ResetButtonProps>= ({title,pressHandler,id}) => {
  return (
    <View>
      <Button style={styles.button} onPress={pressHandler} testID={id}>
        <Text style={styles.title}>{title}</Text>
      </Button>
    </View>
  )
}

export default ResetButton;

