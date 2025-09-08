import { Text } from 'react-native-paper'
import React from 'react';
import { TouchableOpacity, Image, View, ImageSourcePropType, GestureResponderEvent } from 'react-native';
import styles from './ButtonIconStyle'

type ButtonIconProps = {
  image: ImageSourcePropType
  pressHandler: ((event: GestureResponderEvent) => void) | undefined,
  longPressInHandler: ((event: GestureResponderEvent) => void) | undefined,
  id: string
}
/**
 * Renders a touchable image component that responds to press and long press events.
 * 
 * @param {Object} props - The component props.
 * @param {ImageSourcePropType} props.image - The source of the image to display.
 * @param {Function} props.pressHandler - The function to call on press event.
 * @param {Function} props.longPressInHandler - The function to call on long press in event.
 * @param {string} props.id - The test ID for the component.
 * @returns {JSX.Element} The rendered component.
 * @throws {Error} Throws an error if the image source is invalid.
 */
const ButtonIcon: React.FC<ButtonIconProps> = ({image,pressHandler,longPressInHandler,id}) => {
  return (
    <View>
      <TouchableOpacity onPress={pressHandler} 
                        onPressIn={longPressInHandler}
                        testID={id}
                       >
        <Image source={image} style={styles.image}/>

      </TouchableOpacity>
    </View>
  )
}

export default ButtonIcon

