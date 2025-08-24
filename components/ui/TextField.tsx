import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

interface TextFieldProps extends TextInputProps {
  placeholder: string; // Make placeholder a required prop
}

export function TextField({ placeholder, ...props }: TextFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder} // Ensure placeholder is passed
        placeholderTextColor="#888"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
