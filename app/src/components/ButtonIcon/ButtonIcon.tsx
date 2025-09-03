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

