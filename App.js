import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  const[input, setInput] = useState('')
  const[result, setResult] = useState('')
  const onButtonPress = (value) => {
    if(value === '='){
      try {
        setResult(eval(input))
      } catch(error){
        setResult('Erro')
      }
    }
    else if(value === 'C'){
      setInput('')
      setResult('')
    }
    else {
      setInput(input + value)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {result}
        </Text>
      </View>
        
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputText}
        value={input}
        onChangeText={setInput}
        keyboardType='numeric'/>
        <View style={styles.buttonContainer}>
          {['7', '8', '9', '/','4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map(
            (item,index) => (
              <TouchableOpacity 
              key={index} 
              style={styles.button} 
              onPress={()=> onButtonPress(item)}>
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  resultText: {
    fontSize: 40,
  },

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  inputText: {
    fontSize: 30,
  },

  buttonContainer: {
    felx: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  button: {
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '25%',
    minHeight: '20%',
    borderWidth: 1,
    borderColor: '#ccc',
  },

  buttonText: {
    fontSize: 24,
  },
});
