import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../components';
import {appSettings} from '../../config/AppSettings';
import Constant from '../../config/Constant';
import {fcmService} from '../../config/FireBase/FCMService';
import {PropsStyleTheme} from '../../config/theme';
import settingsServices from '../../core/redux/services/settingsServices';
import styles from './styles';
var DeviceInfo = require('react-native-device-info');
var width = Dimensions.get('screen').width;
var height = Dimensions.get('screen').height;
const avatar = require('../../assets/img/imageContainer/bg_home.jpg');

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.Auth.user || {});
  const ThemStore: PropsStyleTheme = useSelector(
    (state: any) => state.Settings.theme,
  );

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn)
    settingsServices.ChangeThemeApp(!isSwitchOn,dispatch);
  };
  const signOut = async () => {
    appSettings.token = null;
    await AsyncStorage.removeItem(Constant.STORAGE.TOKEN);
    if (appSettings.remember == false) {
      await AsyncStorage.removeItem(Constant.STORAGE.USERNAME);
      await AsyncStorage.removeItem(Constant.STORAGE.PASSWORD);
      appSettings.username = null;
      appSettings.password = null;
      navigation.navigate('LoginScreen');
    } else {
      navigation.navigate('LoginScreen');
    }
    fcmService.UpdateStatusNotifyOnFireBases(user.roleName);
  };

  return (
    <ImageBackground
      source={ThemStore.BackGroundImage}
      style={{width: width, height: height}}>
      <StatusBar
        translucent={true}
        backgroundColor={'rgba(0, 0, 0, 0)'}
        barStyle={ThemStore.StatusBarMode || 'dark-content'}
      />
      
      <View style={{marginTop: StatusBar.currentHeight, flex: 1}}>
        <Header backBtnEnable={false} textHeader={'Cài đặt'} buttonRight={<Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>} />
       
        <View style={styles.wrapper}>
          <View style={styles.pannel}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Image style={styles.avatar} source={avatar} />
              </View>
              <Text style={styles.name}>
                {user.username}
                <Icon
                  name="star"
                  size={18}
                  style={{paddingLeft: 10}}
                  solid={true}
                  color="#e3f542"
                />
              </Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>
            <View style={styles.profileDetail}>
              <View style={styles.detailTop}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailText}>Left</Text>
                </View>
                <View style={styles.devide}></View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailText}>Right</Text>
                </View>
              </View>
              <View style={styles.detailBottom}>
                <View style={styles.detailItem}>
                  <Icon
                    style={styles.icon}
                    name="snowflake"
                    size={25}
                    color="#050b1d"
                  />
                  <Text style={styles.detailText}>Top up</Text>
                </View>
                <View style={styles.detailItem}>
                  <Icon
                    style={styles.icon}
                    name="draw-polygon"
                    size={25}
                    color="#050b1d"
                  />
                  <Text style={styles.detailText}>Witdhdraw</Text>
                </View>
                <View style={styles.detailItem}>
                  <Icon
                    style={styles.icon}
                    name="paper-plane"
                    size={25}
                    color="#050b1d"
                  />
                  <Text style={styles.detailText}>Left</Text>
                </View>
                <View style={styles.detailItem}>
                  <Icon
                    style={styles.icon}
                    name="shield-alt"
                    size={25}
                    color="#050b1d"
                  />
                  <Text style={styles.detailText}>Right</Text>
                </View>
              </View>
            </View>
            <Text style={styles.title}>{DeviceInfo.getUniqueId()}</Text>
            <ScrollView style={styles.body} nestedScrollEnabled={true}>
              {/* <ScrollView style={scss.scrollview}> */}
              <View style={{width: width - 40, marginBottom: 12}}>
                <ButtonProfile onPress={signOut} title={'Đăng xuất'} />
              </View>
              <View style={{width: width - 40, marginBottom: 12}}>
                <ButtonProfile
                  onPress={() => navigation.navigate('ContactScreen')}
                  title={'Liên hệ'}
                />
              </View>
              <View style={{width: width - 40, marginBottom: 12}}>
                <ButtonProfile
                  onPress={() => navigation.navigate('FAQScreen')}
                  title={'FAQ'}
                />
              </View>
              <View style={{width: width - 40, marginBottom: 12}}>
                <ButtonProfile
                  onPress={() => navigation.navigate('InstructionScreen')}
                  title={'Hướng dẫn an toàn'}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

function ButtonProfile(props: {title: string; onPress?: any}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={() => {
        props.onPress ? props.onPress() : console.log('no event');
      }}>
      <Text style={styles.button_title}>{props.title}</Text>
      <Icon
        name="chevron-right"
        size={18}
        style={{paddingLeft: 10}}
        solid={true}
        color="#abd3e7"
      />
    </TouchableOpacity>
  );
}
