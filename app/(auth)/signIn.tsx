import { AppButton } from '@/components/ui/AppButton';
import { PasswordField } from '@/components/ui/PasswordField';
import { TextField } from '@/components/ui/TextField';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignInScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      
      <TextField placeholder='User Name'/>
      <PasswordField placeholder='Password'/>
      <AppButton title="Sign In" onPress={() => router.push('/(tabs)/home')} />
        
      
      
      <TouchableOpacity onPress={() => router.push('/(auth)/signUp')}>
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
