import React, { useEffect } from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import StackNavigator from './src/components/StackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { checkPermissions } from './src/utils/permissions';

function App(): React.JSX.Element {
  useEffect(() => {
    checkPermissions();
  }, [])

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StackNavigator />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
