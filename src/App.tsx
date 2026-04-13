import { StyleSheet, Text, View, TextInput } from 'react-native';
import Intervalo from './Intervalo';
import { useState } from 'react';

export default function App() {
  const [min, setMin] = useState<number>(0)
  const [max, setMax] = useState<number>(10)


  return (
    <View style={styles.container}>

      <TextInput style={styles.input} value={min.toString()} keyboardType='numeric'
        onChangeText={(valor) => {
          setMin(+valor)
        }} />

      <TextInput value={max.toString()}
        keyboardType='numeric'
        onChangeText={(valor) => {
          setMax(+valor)
        }} />

      <Intervalo min={min} max={max}>

      </Intervalo>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    marginBottom: 20,
    borderColor: "#000",
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",

  }
});