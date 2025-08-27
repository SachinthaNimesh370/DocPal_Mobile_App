import Model from '@/components/ui/Model';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function ModelList() {
  return (
    <SafeAreaView>
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ paddingHorizontal: 10,  }} // Add horizontal padding and white background
        >
            <Model backgroundColor='green'componentName=' Hii' iconName='man'/>
            <Model backgroundColor='green'componentName=' Hii' iconName='man'/>
            <Model backgroundColor='green'componentName=' Hii' iconName='man'/>
            <Model backgroundColor='green'componentName=' Hii' iconName='man'/>
     
        </ScrollView>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120, // Adjusted height
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,

    borderRadius: 8,
  },
  
});