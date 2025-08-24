import { AppButton } from '@/components/ui/AppButton';
import { TextField } from '@/components/ui/TextField';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextField placeholder='User Name'/>
      <TextField placeholder='Email'/>  
      <TextField placeholder='Password' secureTextEntry={true}/>
      <TextField placeholder='Confirm Password' secureTextEntry={true}/>  
      <AppButton title="Sign Up" onPress={() => router.push('/(tabs)/explore')} />    


        <TouchableOpacity onPress={() => router.push('/(auth)/signIn')}>
          <Text style={styles.registrationText}>Don't have an account? Register here</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  registrationText: {
    marginTop: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
