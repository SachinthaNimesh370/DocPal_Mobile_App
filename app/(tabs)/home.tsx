

import ModelList from '@/components/ModelList';
import Profile from '@/components/Profile';
import Shedule from '@/components/Shedule';
import SearchField from '@/components/ui/SearchFeild';
import { View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, marginTop:50}}>
      <Profile/>
      <SearchField />
      <ModelList />
      <Shedule   />
 
     
      
    </View>
);
}