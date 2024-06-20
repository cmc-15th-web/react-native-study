import Colors from '@src/Colors';
import {StyleSheet, Text, View} from 'react-native';

const SettingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Gray900,
      }}>
      <Text
        style={{
          color: Colors.Gray400,
          textAlign: 'center',
        }}>
        Setting화면
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingScreen;
