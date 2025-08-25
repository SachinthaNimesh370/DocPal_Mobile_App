

import ModelList from '@/components/ModelList';
import { Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, marginTop:50}}>
      <Text>Home Screen</Text>
      <ModelList />
 
     
      
    </View>
);
}