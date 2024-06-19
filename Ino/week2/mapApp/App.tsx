import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/component/Navigator';
import Permission from './src/Permission';

function App(): React.JSX.Element {
  const [isPermission, setPermission] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {isPermission ? (
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      ) : (
        <Permission />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default App;
