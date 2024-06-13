import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import StackNavigator from './src/components/StackNavigator';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StackNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
