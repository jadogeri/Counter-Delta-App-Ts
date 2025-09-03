import { View} from 'react-native';
import { Text } from 'react-native-paper';
import React,{useReducer} from 'react'
import { ButtonIcon, CountIcon, DeltaButton, ResetButton  } from '../../components';
import styles from './HomeStyles';
import { StatusBar } from 'expo-status-bar';
import reducer, { CounterActionType } from '../../reducers/countReducer';

const Home = () => {

  const [state,dispatch] = useReducer(reducer,{count :0, delta: 0, max : 0, min : 0})
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Text style={styles.title1}>Counter Delta</Text>
      <Text style={styles.title2}>App</Text>

      <CountIcon  count={state.count}/>

      <View  style={styles.two_button_container}>
      <ButtonIcon image={require('../../../assets/images/minus_sign.png')}
              pressHandler={() => { dispatch({ type: CounterActionType.SET_NUMBER, payload: -1 * state.delta }); } }
              id='b1' longPressInHandler={undefined}/>
      <ButtonIcon image={require('../../../assets/images/plus_sign.png')}
              pressHandler={()=>{dispatch({type:CounterActionType.SET_NUMBER,payload :state.delta})}}
              id='b2' longPressInHandler={undefined}/>
      </View>
      <CountIcon  count={state.delta} style={{top: -70}}/>

<View style={styles.two_delta_buttons_container}>
<DeltaButton  sign="-" pressHandler={()=>{dispatch({type:CounterActionType.SET_DELTA,payload:-1})}}
              color="red" id='delta1'/>
<DeltaButton  sign="+" pressHandler={()=>{dispatch({type:CounterActionType.SET_DELTA,payload:1})}}
              color="green" id='delta2'/>
</View>

      <View  style={styles.two_reset_button_container}>
      <ResetButton  title="RESET COUNT" id='reset1'
                    pressHandler={()=>{dispatch({type:CounterActionType.RESET_COUNT,payload : -1 * state.delta})}} />
      <ResetButton  title="RESET DELTA" id='reset2'
                    pressHandler={()=>{dispatch({type:CounterActionType.RESET_DELTA,payload :state.delta})}} />
      </View>
    </View>

  )
}

export default Home;

