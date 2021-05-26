import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function header(){
    return(
        <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
        </View>
    )
    
}
const styles=StyleSheet.create({
    header:{
height: 80,
padding:30,
backgroundColor:'grey'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color: '#fff',
        textAlign:'center'

    }

});