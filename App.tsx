import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "#1A1A1A"}}>
      <StatusBar
        barStyle={"light-content"}
        translucent
      />
      <Home/>
    </View>  
  )
}