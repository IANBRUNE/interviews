import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styles,
});

const HomeView = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://api.publicapis.org/entries').then(result => {
      setData(result.data.entries.splice(0, 10));
      console.log(result.data.entries.splice(0, 10));
    });
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'backgroundStyle.backgroundColor'}
      />

      <Button
        title="Navigate"
        onPress={() => navigation.navigate('testView')}
      />
    </SafeAreaView>
  );
};

export default HomeView;
