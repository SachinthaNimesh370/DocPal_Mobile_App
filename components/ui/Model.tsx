import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ModelProps {
  backgroundColor: string;
  componentName: string;
  iconName: keyof typeof Ionicons.glyphMap; 
  onPress?: () => void;
}

export default function Model({
  backgroundColor,
  componentName,
  iconName,
  onPress,
}: ModelProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor } ]}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={75} color="white" />
      <Text style={styles.text}>{componentName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
    borderRadius: 8,
  },
  text: {
    marginTop: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    
  },
});