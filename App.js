import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import LoginForm from './components/Loginform';
import HomePage from './components/HomePage';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {currentScreen === 'Login' ? (
        <LoginForm navigate={navigate} />
      ) : (
        <HomePage navigate={navigate} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;