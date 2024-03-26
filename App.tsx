import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
export default function App() {
  const[variavela, setVariavela] = React.useState('')
  const[variavelb, setVariavelb] = React.useState('')
  const resultado = (parseFloat(variavela) * parseFloat(variavelb)) / 2;

  


return (

    <View style={styles.container}>
      <Text style={styles.field}>Altura:</Text>
      <TextInput onChangeText={setVariavela}  style= {styles.txtfield}/>

      <StatusBar style="auto" />

      <Text style={styles.field}>Base:</Text>
      <TextInput onChangeText={setVariavelb}  style= {styles.txtfield}/>

      <Text style={styles.field}>Resultado:</Text>
      <Text style={styles.field}>{resultado}</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(105,105,105)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  field: {
            color:  '#fff',
            fontSize: 25,
            justifyContent: 'center',
            alignContent:'center',
            textAlign: 'center',
            

          },
txtfield:{
          backgroundColor: '#fff',
          width: 350,
          
          borderRadius: 40,
          padding: 10,
          margin: 15,
          alignItems: 'center',
          fontSize: 25,

        },
        
});

