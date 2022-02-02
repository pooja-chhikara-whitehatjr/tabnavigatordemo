import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class  Details extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Details....

      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
