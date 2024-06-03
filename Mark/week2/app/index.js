/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    import('./reactotronConfig').then(() => Reactotron.log('Reactotron Configured'));
    Reactotron.log('reactotron start!!');
}
AppRegistry.registerComponent(appName, () => App);
