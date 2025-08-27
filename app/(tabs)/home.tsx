

import ModelList from '@/components/ModelList';
import Shedule from '@/components/Shedule';
import SearchField from '@/components/ui/SearchFeild';
import { Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, marginTop:50}}>
      <Text>Home Screen</Text>
      <SearchField />
      <ModelList />
      <Shedule   />
 
     
      
    </View>
);
}