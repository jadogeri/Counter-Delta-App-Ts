import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'skyblue',
        flex:1,
        height:"100%"
    },
    title1:{
        fontSize:50,
        fontStyle:'italic',
        marginTop: 40,
        alignSelf:'center',
        justifyContent:'center'
    },
    title2:{
        fontSize:50,
        fontStyle:'italic',
        marginTop: 2,
        alignSelf:'center',
        justifyContent:'center'
    },
    two_button_container:{
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        top:-50

    },
    two_reset_button_container:{
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',   
        top:-40    

    },
    two_delta_buttons_container:{
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',   
        top:-20    

    }
});

export default styles;
