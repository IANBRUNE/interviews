import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {addEmergency} from '../redux/emergencySlice';
import {useDispatch} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const InEmergencyView = ({navigation}) => {
  const [noticeTime, setNoticeTime] = useState(0);
  useEffect(() => {
    const now = new Date();
    setNoticeTime(now.toLocaleTimeString());
  }, [setNoticeTime]);

  const dispatch = useDispatch();

  const onYes = () => {
    const respondTime = new Date();
    dispatch(
      addEmergency({noticeTime, respondTime: respondTime.toLocaleTimeString()}),
    );
    navigation.navigate('emergency');
  };

  const onNo = () => {
    navigation.navigate('emergency');
  };

  return (
    <View style={styles.container}>
      <Text>EMERGENCY NEARBY!!!</Text>
      <Text>CAN YOU RESPOND?</Text>
      <Button title="Yes" onPress={onYes} />
      <Button title="No" onPress={onNo} />
    </View>
  );
};

export default InEmergencyView;
