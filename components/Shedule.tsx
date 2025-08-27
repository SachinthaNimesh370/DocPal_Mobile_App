import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SheduleProps {
  date?: string;
  time?: string;
  doctorName?: string;
  doctorImage?: string;
  onPress?: () => void;
}

export default function Shedule({
  date = '2025-08-25',
  time = '10:00 AM',
  doctorName = 'Dr. John Doe',
  doctorImage = 'https://via.placeholder.com/50',
  onPress,
}: SheduleProps) {
  return (
    <View>
      <Text style={styles.title}>Schedule</Text>
      <LinearGradient
        colors={['#497deeff', '#4277ebff', '#2e5cdbff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <TouchableOpacity
          style={styles.touchable}
          onPress={onPress}
        >
          <Image source={{ uri: doctorImage }} style={styles.avatar} />
          <View style={styles.infoContainer}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.doctorName}>{doctorName}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 30,
    color: '#333',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    borderWidth: 2,
    borderColor: 'white',
  },
  infoContainer: {
    flex: 1,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  time: {
    fontSize: 14,
    color: 'white',
    marginTop: 4,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
  },
  icon: {
    marginLeft: 8,
  },
});