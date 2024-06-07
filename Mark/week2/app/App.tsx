import React from 'react';
import {StyleSheet, View} from 'react-native';
import StackNavigator from './src/components/StackNavigator';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
