import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/authSlice';
import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    margin: 20,
    height: 50,
    width: '90%',
  },
});

const HomeView = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('emergency');
    }
  }, [navigation, isAuthenticated]);

  const onLogin = () => {
    dispatch(login({email, password}));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          value={email}
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="password"
          style={styles.textInput}
          value={password}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={onLogin} />
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
