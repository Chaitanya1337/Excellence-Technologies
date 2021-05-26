import React,{useState} from 'react';
import { StyleSheet, Text,View,TextInput,Button} from 'react-native';

export default function AddTodo({addHandler}){
    const [text , setText]=useState('');
    const changeHandler= (val) => {
        setText(val); 
}
    return(
        <View>
        <TextInput
        style={styles.text11}
        placeholder='New Todo'
        onChangeText={changeHandler}
        />
        <Button onPress={()=> addHandler(text)} title='Add To the list' color='coral'/>
        </View>
        
    )
    
}
const styles=StyleSheet.create({
    text11:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'grey'
    }
    

})