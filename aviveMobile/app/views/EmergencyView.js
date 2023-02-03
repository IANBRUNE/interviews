import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Emergency from '../components/Emergency';
import {logout} from '../redux/authSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
  },
  emptyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

const generateRandomMinute = () => {
  const randomMinute = Math.floor(Math.random() * (180000 - 60000 + 1)) + 60000;
  console.log('random minute generated', randomMinute);
  return randomMinute;
};

const EmergencyView = ({navigation}) => {
  const emergencies = useSelector(state => state.emergency.emergencies);
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(
      () => navigation.navigate('inEmergency'),
      generateRandomMinute(),
    );
  });

  const onLogout = () => {
    dispatch(logout());
    navigation.navigate('auth');
  };

  if (emergencies && emergencies.length > 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Button title="logout" onPress={onLogout} />
        </View>
        <FlatList
          data={emergencies}
          renderItem={({item}) => (
            <Emergency
              title={item.title}
              noticeTime={item.noticeTime}
              respondTime={item.respondTime}
            />
          )}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.emptyContainer}>
      <View style={styles.header}>
        <Button title="logout" onPress={onLogout} />
      </View>
      <View style={styles.emptyTextContainer}>
        <Text style={styles.emptyText}>No emergencies have occured!</Text>
      </View>
    </SafeAreaView>
  );
};

export default EmergencyView;
