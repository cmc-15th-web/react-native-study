import {Alert, Linking} from 'react-native';

const SettingsAlert = (title: string, message: string) => {
  Alert.alert(title, message, [
    {text: 'Cancel', style: 'cancel'},
    {text: 'Open Settings', onPress: () => Linking.openSettings()},
  ]);
};

export default SettingsAlert;
