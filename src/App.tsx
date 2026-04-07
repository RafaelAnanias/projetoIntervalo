import { StyleSheet, Text, View } from 'react-native';
import Intervalo from './Intervalo';

export default function App() {
  return (
    <View style={styles.container}>

    <Intervalo min={10} max={100}></Intervalo>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});