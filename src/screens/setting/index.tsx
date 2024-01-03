/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constant from '../../config/Constant';
import {appSettings} from '../../config/AppSettings';
import {ViewBackGround} from '../../components';
import styles from './styles';
const SettingScreen = () => {
  useEffect(() => {
    if (appSettings.domainDefault != null ) {
      setDomain(appSettings.domainDefault);
    }
  }, []);
  const navigation = useNavigation();
  const [domain, setDomain] = useState('');
  const onSave = async () => {
    await Promise.all([
      AsyncStorage.setItem(Constant.STORAGE.DOMAIN, domain),
    ]);
    appSettings.domainDefault = domain;
    navigation.goBack();
  };
  return (
    <ViewBackGround>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.header}>Cài đặt</Text>
          <View style={styles.buttonStyle}>
            <View style={{width: 100}}>
              <Text style={styles.buttonTextStyle}>Base Url</Text>
            </View>
            <Input
              style={styles.text}
              placeholder=""
              onChangeText={setDomain}
              value={domain}
            />
          </View>
          <LinearGradient
            colors={['#212224', '#212224', '#212224']}
            style={styles.linearGradient}>
            <TouchableOpacity onPress={onSave}>
              <Text style={styles.buttonText}> Lưu cài đặt </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </KeyboardAvoidingView>
    </ViewBackGround>
  );
};

export default SettingScreen;
