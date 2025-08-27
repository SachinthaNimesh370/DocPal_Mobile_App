import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface SearchFieldProps {
  placeholder?: string;
}

export default function SearchField({ placeholder = 'Search...' }: SearchFieldProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    margin: 18,
    borderColor: '#e0ddddff',
    borderWidth: 1,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});