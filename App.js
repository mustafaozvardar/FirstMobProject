import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,Alert} from 'react-native';
import React, {useState} from 'react';


export default function App() 
{
  const [name,setName] = useState('');

  const handlePress=()=>{

    
    if(name=='')
    {
      alert('Please Enter your name..');
    }
    
    else
    {
      alert('Hello, '+name+' :)');
    }
  };

  

  return (
    <View style={styles.container}>
      <StatusBar barstyle={'light-content'}></StatusBar>
      <View style={styles.formContainer}>
        <Text style={styles.title}>First Project - Mustafa Özvardar</Text>
        
        <View style={styles.inputWrapper}>
          <TextInput 
          style={styles.inputStyle} 
          onChangeText={setName}
          value={name}
          placeholder='Enter your name..'>
          
          </TextInput>
        </View>

        <TouchableOpacity 
        
          onPress={handlePress}
          style={styles.submitBtn}>

          <Text style={styles.submitBtnTxt}>Submit</Text>
        </TouchableOpacity>        

       
      
      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:15,
  },

  formContainer:{
    backgroundColor:'#F5EDDC',
    padding:20,
    borderRadius:20,
    width:'150',
  },

  title:{
    color:'#16213E',
    fontSize:25,
    marginBottom:15,
  },

  inputWrapper:{
    marginBottom:15,
  },

  inputStyle:{
    borderColor:'#16213E',
    borderWidth:1,
    borderRadius:10,
    padding:10,
    
  },

  errorTxt:{
    fontSize:12,
    color:'#FF0D10'
  },

  submitBtn:{
    backgroundColor:'#395B64',
    padding:10,
    borderRadius:15,
    justifyContent:'center',
  },

  submitBtnTxt:{
    color:'#fff',
    textAlign:'center',
    fontSize:20,
  },


  
});
