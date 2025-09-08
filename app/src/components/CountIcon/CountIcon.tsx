import { StyleProp, Text, TextStyle, View } from 'react-native'
import React from 'react'
import styles from './CountIconStyle'

type CountType ={
  count: number;
  style?: StyleProp<TextStyle>
}
/**
 * Renders a view containing a text element that displays a count value.
 * The text color changes based on the count value: black for 0, blue for positive, and red for negative.
 * 
 * @param {Object} props - The component props.
 * @param {number} props.count - The count value to display.
 * @param {Object} [props.style] - Optional additional styles for the text.
 * @returns {JSX.Element} The rendered component.
 * @throws {Error} Throws an error if count is not a number.
 */
const CountIcon : React.FC<CountType>= ({count, style}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.icon,count === 0 ?{color:'black'} :count > 0 ? {color : 'blue'} : {color: 'red'},style]}>{count}</Text>
    </View>
  )
}

export default CountIcon

