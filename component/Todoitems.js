import React from 'react';
import { StyleSheet, Text,TouchableOpacity} from 'react-native';

export default function Todoitems({item}){
    return(
        <TouchableOpacity>
          <Text style={styles.text11}>{item.text}</Text>
        </TouchableOpacity>
        
    )
    
}
const styles=StyleSheet.create({
    text11:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:3,
        fontSize:20,
        borderStyle:'dashed',
        borderRadius:10
    }
    

})