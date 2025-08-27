import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ProfileProps {
  profileName?: string;
  profileImage?: any;
}

export default function Profile({
  profileName = 'John Doe',
  profileImage = require('../assets/images/Profile Image.png'),
}: ProfileProps) {
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.image} />
      <Text style={styles.text}>Hello, {profileName}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});