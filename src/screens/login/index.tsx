import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import {SvgXml} from 'react-native-svg';
import Toast from 'react-native-tiny-toast';
import {useDispatch, useSelector} from 'react-redux';
import {svgs} from '../../assets';
import {TextInputCtrl, ViewBackGround} from '../../components';
import ButtonLogin from '../../components/loginComponent/ButtonLogin';
import HeaderLogin from '../../components/loginComponent/HeaderLogin';
import Logo from '../../components/loginComponent/Logo';
import {appSettings} from '../../config/AppSettings';
import Constant from '../../config/Constant';
import {fcmService} from '../../config/FireBase/FCMService';
import AuthService from '../../core/redux/services/UserServices';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import settingsServices from '../../core/redux/services/settingsServices';
const {height, width} = Dimensions.get('screen');


const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const devicetoken = useSelector((state: any) => state.Auth.device_token);
  const [email, setEmail] = useState(appSettings.username||'');
  const [password, setPassword] = useState(appSettings.password||'');
  const [isSelected, setSelection] = useState(appSettings.remember);
  const [isShow, setIsShow] = useState(true);
  const loginHandle = (username?: string, password?: string,token?:string) => {
    if(!token){
      if (username?.length == 0 || password?.length == 0) {
        Toast.show('Vui lòng điền thông tin');
      } else {
        LoginWithTokenOrUP({username,password});
      }
    }else{
      LoginWithTokenOrUP({token});
    }
  };
  const LoginWithTokenOrUP = (object:any)=>{
    settingsServices.ChangeLoadingApp(true,dispatch);
    AuthService.LoginService(object, dispatch)
    .then(result => {
        if (result) {
          fcmService.saveToken(devicetoken, result.roleName,result.ip,result.username);
          if(isSelected){
            AsyncStorage.setItem(Constant.STORAGE.TOKEN, result.token)
            AsyncStorage.setItem(Constant.STORAGE.USERNAME, result.username)
            AsyncStorage.setItem(Constant.STORAGE.PASSWORD, password)
            appSettings.username = result.username;
            appSettings.password = password;
          }
          AsyncStorage.setItem(Constant.STORAGE.REMEMBER, isSelected?'true':'false')
          appSettings.remember = isSelected;
          navigation.reset({
            index:0,
            routes:[{name:'HomeScreen'}]
          });
        } else {
          Toast.show('Đăng nhập thất bại');
        }
    })
    .finally(() => settingsServices.ChangeLoadingApp(false,dispatch))
  }
  async function login() {
    loginHandle(email, password);
  }
  useEffect(() => {
    // setLoad(1);
    appSettings.showStorage();
    console.log('username',appSettings.username);
    
    const tokenIsExists = appSettings.token;
    if (tokenIsExists) {
      loginHandle('', '',tokenIsExists);
      // setLoad(0);
    } else {

     
    }
  }, []);
  return (
    <ViewBackGround>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.ViewWrapLogo}>
              <Logo />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('SettingScreen')}
              style={styles.ViewSetting}>
              <SvgXml
                xml={`${svgs.SvgSetting}`}
                width={30}
                height={30}
                fill={'white'}
              />
            </TouchableOpacity>

            <HeaderLogin>WorldData SEC SOC</HeaderLogin>
            <View style={{marginHorizontal: 16, marginTop: 20}}>
              <View>
                <Text style={styles.TxtEmail}> Tài khoản</Text>
                <TextInputCtrl
                  placeholder={'Email or Username'}
                  value={email}
                  style={styles.ViewTextInput}
                  onChangeText={(text: string) => setEmail(text)}
                />
              </View>
              <View style={{marginTop: 30}}>
                <Text style={styles.TxtEmail}> Mật khẩu</Text>
                <TextInputCtrl
                  placeholder={'Password'}
                  value={password}
                  style={styles.ViewTextInput}
                  onChangeText={(text: string) => setPassword(text)}
                  IconRight={
                    <TouchableOpacity
                      onPress={() => setIsShow(!isShow)}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 12
                      }}>
                      {isShow ? (
                        <SvgXml
                          xml={`${svgs.SvgEye}`}
                          width={25}
                          height={25}
                          fill={'white'}
                        />
                      ) : (
                        <SvgXml
                          xml={`${svgs.SvgEyeHide}`}
                          width={25}
                          height={25}
                          fill={'white'}
                        />
                      )}
                    </TouchableOpacity>
                  }
                  secureTextEntry={isShow}
                  // error={!!false}
                />
              </View>

              {/* <TextInput
          style={{borderRadius: 24, width: '100%'}}
          // label="Mật khẩu"
          returnKeyType="done"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          // error={!!false}
          secureTextEntry
        /> */}
              <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={()=>setSelection(!isSelected)} activeOpacity={.7}>
                       <View style={{flexDirection:'row'}}>
                            <View style={{marginRight:20}}>
                                <CheckBox
                                containerStyle={{padding:0,margin:0,width:25}}
                                  checked={isSelected}
                                  checkedIcon={<Icon name="check-square-o" size={24} color="#fff" />}
                                  onPress={()=>setSelection(!isSelected)}
                                />
                            </View>
                            <Text style={styles.label}>Remember?</Text>
                       </View>
                  </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.label}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>

              <ButtonLogin
                mode="contained"
                onPress={login}
                style={{height: 50}}>
                Login
              </ButtonLogin>

              <View style={styles.row}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ViewBackGround>
  );
};
const styleIns = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: '#ccc',
    width: '100%',
    height: height,
    zIndex: 100,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default LoginScreen;
