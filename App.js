import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';
import { SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <GlobalProvider>
      <SafeAreaView style={styles.container}>
        <AppNavContainer></AppNavContainer>
      </SafeAreaView>
    </GlobalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;
