import { Button,Text } from 'react-native-paper'
import React from 'react';
import {  GestureResponderEvent, Image } from 'react-native';
import styles from './DeltaButtonStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type DeltaButtonProp ={
  sign: string,
  color: string ,
  pressHandler: ((e: GestureResponderEvent) => void) | undefined,
  id: string
}
const DeltaButton : React.FC<DeltaButtonProp>= ({sign,color,pressHandler,id}) => {
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

