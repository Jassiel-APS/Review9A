import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/modules/auth/screens/Login';

export default function App() {
  return (
    <Login />
    /*
    <View style={{ flex: 1, backgroundColor: 'red'}}>
      <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
      <View style={{ flex: 1, backgroundColor: 'white' }}></View>
      <View style={{ flex: 1, backgroundColor: 'red' }}></View>
    </View>
    */
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
