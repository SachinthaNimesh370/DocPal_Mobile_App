import Model from '@/components/ui/Model';
import React from 'react';
import { ScrollView } from 'react-native';

export default function ModelList() {
  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false} // hides scrollbar
      contentContainerStyle={{ paddingHorizontal: 10 }} // optional padding
    >
      <Model backgroundColor='green'componentName=' Hii' iconName='man'/>
      <Model backgroundColor='green'componentName=' Hii' iconName='man'/>
      <Model backgroundColor='green'componentName=' Hii' iconName='man'/>
      <Model backgroundColor='green'componentName=' Hii' iconName='man'/>
     
    </ScrollView>
  )
}