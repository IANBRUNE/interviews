import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    marginBottom: 30,
  },
  titleContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  title: {
    fontSize: 22,
    margin: 5,
  },
  content: {margin: 5, marginBottom: 40},
  time: {
    fontSize: 20,
  },
});

const Emergency = ({noticeTime, respondTime, index}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EMG #{index}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.time}>Notice Time: {noticeTime}</Text>
        <Text style={styles.time}>Respond Time: {respondTime}</Text>
      </View>
    </View>
  );
};

export default Emergency;
