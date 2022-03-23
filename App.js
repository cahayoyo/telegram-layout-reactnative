import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Telegram from './src/Telegram'

export default function App() {
  return (  
    <Telegram />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
