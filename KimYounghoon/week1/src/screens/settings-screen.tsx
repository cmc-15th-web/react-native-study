import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../components/header';
import {COLORS} from '../theme';
import {useCustomStore} from '../hooks/useCustomStore';
import Layout from '../components/layout';

const THEME: ThemeColorType[] = [
  'primaryOrange',
  'primaryGreen',
  'primaryBlue',
  'primaryPurple',
  'primaryPink',
];

const SettingsScreen = () => {
  const {setTheme} = useCustomStore();

  return (
    <Layout>
      <Header title="설정" />
      <View style={styles.settingTop}>
        <Text style={styles.settingTopText}>색상을 선택해주세요.</Text>
      </View>
      <View style={styles.settingThemeContainer}>
        {THEME.map(t => (
          <TouchableOpacity
            key={t}
            onPress={() => setTheme(t)}
            style={[styles.settingTheme, {backgroundColor: COLORS[t]}]}
          />
        ))}
      </View>
    </Layout>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  settingContainer: {
    flex: 1,
  },
  settingTop: {
    height: 57,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 32,
  },
  settingTopText: {
    fontSize: 18,
    color: '#000',
  },
  settingThemeContainer: {
    height: 62,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
  },
  settingTheme: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});
