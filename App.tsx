import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import Title from './components/Title/Title';

function App() {
  const styles = StyleSheet.create({
    text: {
      fontSize: 50,
      fontFamily: getFontFamily('Inter', '500'),
    },
  });

  return (
    <SafeAreaView>
      <Title title="Let’s Explore " />
    </SafeAreaView>
  );
}

export default App;
