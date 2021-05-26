import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList,Alert} from 'react-native';
import Header from './component/Header';
import Todoitems from './component/Todoitems';
import AddTodo from './component/AddTodo';

export default function App() {
  const [todos,setTodos] = useState([
    {text: 'Buy a coffee',key: '1'},
    {text: 'Buy a Tea',key: '2'},
    {text: 'Buy a Choclate',key: '3'}
  ]);
const addHandler=(text)=>{
  if(text.length>0){
    setTodos((prevTodos)=>{
      return [
        {text : text ,key:Math.random.toString()},
        ...prevTodos
      ];
    })
  }else{
    Alert.alert('OOPS!','Input Field cannot be empty',[
      {text:'Understood', onPress:()=>console.log('Alerted')
    }
    ]
      
    )
  }
}
 return (
<View style={styles.container}>
  <Header/>
  
  <View style={styles.content}>
    <AddTodo addHandler={addHandler}/>
  <View style={styles.list}>
    <FlatList
      data={todos}
          renderItem={({item}) => (
            <Todoitems item={item}/>
          
          
)}
      />
    
  </View>
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
    content:{
      padding:40,
    },
    list:{
      marginTop:20
    }
  
  
}
);
