import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TestView = ({params}) => (
  <View style={styles.container}>
    <Text>TestView</Text>
  </View>
);

export default TestView;
