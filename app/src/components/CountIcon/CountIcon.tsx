import { StyleProp, Text, TextStyle, View } from 'react-native'
import React from 'react'
import styles from './CountIconStyle'

type CountType ={
  count: number;
  style?: StyleProp<TextStyle>
}
const CountIcon : React.FC<CountType>= ({count, style}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.icon,count === 0 ?{color:'black'} :count > 0 ? {color : 'blue'} : {color: 'red'},style]}>{count}</Text>
    </View>
  )
}

export default CountIcon

