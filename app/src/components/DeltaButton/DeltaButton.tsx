import { Button,Text } from 'react-native-paper'
import React from 'react';
import {  GestureResponderEvent} from 'react-native';
import styles from './DeltaButtonStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type DeltaButtonProp ={
  sign: string,
  color: string ,
  pressHandler: ((e: GestureResponderEvent) => void) | undefined,
  id: string
}
/**
 * Renders a customizable button with an icon and text.
 * 
 * @param {Object} params - The parameters for the button.
 * @param {string} params.sign - The text to display on the button.
 * @param {string} params.color - The background color of the button.
 * @param {function} params.pressHandler - The function to call when the button is pressed.
 * @param {string} params.id - The test ID for the button.
 * @returns {JSX.Element} The rendered button component.
 * @throws {Error} Throws an error if pressHandler is not a function.
 */


const DeltaButton : React.FC<DeltaButtonProp> = ({sign,color,pressHandler,id}) => {
  return (
    
    <Button 
      onPress={pressHandler} testID={id}
      style={[styles.button,{backgroundColor:color}]}>
        <MaterialCommunityIcons name='delta' size={20} color="black"/> 
    <Text style={styles.sign}>{sign}</Text>
    </Button>
  )
}

export default DeltaButton

