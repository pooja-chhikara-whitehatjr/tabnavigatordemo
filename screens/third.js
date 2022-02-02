import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class  Third extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Third....

      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
