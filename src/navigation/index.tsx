import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, TransitionPresets, TransitionSpecs} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/home';
import SettingScreen from '../screens/setting';
import NotificationScreen from '../screens/notification';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import navigationService from '../services/navigation-service/';
import CustomBottomTab from './CustomBottomTab';
import ReportScreen from '../screens/report';
import PolicyScreen from '../screens/report/policy';
import SecurityRickScreen from '../screens/security-risk';
import WarningScreen from '../screens/warning';
import NetWorkScreen from '../screens/report/network';
import ProfileScreen from '../screens/profile';
import {svgs} from '../assets';
import ServiceScreen from '../screens/report/service';
import TerminalScreen from '../screens/report/terminal';
import CybersecurityNewsScreen from '../screens/cybersecurity-news';
import EducateScreen from '../screens/educate';
import DetailAvailableScreen from '../screens/educate/detail-availble';
import DetailAttendedScreen from '../screens/educate/detail-attended';
import { useDispatch, useSelector } from 'react-redux';
import { fcmService } from '../config/FireBase/FCMService';
import { localNotificationService } from '../config/FireBase/LocalNotificationService';
import { ActivityIndicator, Dimensions, StyleSheet, ToastAndroid, View } from 'react-native';
import { useEffect } from 'react';
import UserServices from '../core/redux/services/UserServices';
import DetailNews from '../screens/cybersecurity-news/details';
import DetailNotificationScreen from '../screens/notification/detailNotify';
import InstructionScreen from '../screens/instruction';
import ContactScreen from '../screens/contact';
import FAQScreen from '../screens/FAQ';
import Constant from '../config/Constant';
import { appSettings } from '../config/AppSettings';
import settingsServices from '../core/redux/services/settingsServices';
const {height, width} = Dimensions.get("screen")

// import {APP_SCREEN_TYPES} from './screenTypes';
const Tab: any = createBottomTabNavigator();
const Stack: any = createStackNavigator();;
function BottomTab() {
  return (
    <Tab.Navigator tabBar={(props: any) => <CustomBottomTab {...props} />}>
      <Tab.Screen
        name={Constant.SCREEN.HOMESCREEN}
        component={HomeStack}
        options={{
          tabBarIcon: svgs.SvgHome,
          tabBarIconfocus: svgs.SvgHomeForcus,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name={Constant.SCREEN.NOTIFICATION}
        component={NotificationStack}
        options={{
          tabBarIcon: svgs.SvgNoti,
          tabBarIconfocus: svgs.SvgNotiFocus,
          title: 'Notification',
        }}
      />
      <Tab.Screen
        name={Constant.SCREEN.PROFILE}
        component={SettingStack}
        options={{
          tabBarIcon: svgs.SvgSetting,
          tabBarIconfocus: svgs.SvgSettingForcus,
          title: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
      headerShown: false,
      gestureEnalbe:true,
      gestureDirection:'horizontal',
      cardStyle:{ backgroundColor: 'transparent' },
      cardOverlayEnabled:false,
      cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
      // ...TransitionPresets.ModalPresentationIOS
      }}
    >
      <Stack.Screen name={Constant.SCREEN.HOMESCREEN} component={HomeScreen} />
      <Stack.Screen name={Constant.SCREEN.REPORT} component={ReportScreen} />
      <Stack.Screen name={Constant.SCREEN.POLICY} component={PolicyScreen} />
      <Stack.Screen name={Constant.SCREEN.SECYRITYRICKSCREEN} component={SecurityRickScreen}
      />
      <Stack.Screen name={Constant.SCREEN.WARNING} component={WarningScreen} />
      <Stack.Screen name={Constant.SCREEN.NETWORK} component={NetWorkScreen} />
      <Stack.Screen name={Constant.SCREEN.SERVICE} component={ServiceScreen} />
      <Stack.Screen name={Constant.SCREEN.TERMINAL} component={TerminalScreen} />
      <Stack.Screen name={Constant.SCREEN.NEWS} component={CybersecurityNewsScreen}/>
      <Stack.Screen name={Constant.SCREEN.DETAILNEWS} component={DetailNews} />
      <Stack.Screen name={Constant.SCREEN.EDUCATE} component={EducateScreen} />
      <Stack.Screen name={Constant.SCREEN.DETAILATTENDED} component={DetailAttendedScreen} />
      <Stack.Screen name={Constant.SCREEN.DETAILAVAILABLE} component={DetailAvailableScreen} />

      <Stack.Screen name={Constant.SCREEN.INSTRUCTION}component={InstructionScreen}/>
      <Stack.Screen name={Constant.SCREEN.CONTACT}component={ContactScreen}/>
      <Stack.Screen name={Constant.SCREEN.FAQ}component={FAQScreen}/>
    </Stack.Navigator>
  );
}
function NotificationStack() {
  const MyTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS
  }
  return (
    <Stack.Navigator
      screenOptions={{
      headerShown: false,
        ...MyTransition,

      }}
    >
      <Stack.Screen
        name={Constant.SCREEN.NOTIFICATION}
        component={NotificationScreen}
      />
       <Stack.Screen
        name={Constant.SCREEN.DETAILNOTIFICATION}
        component={DetailNotificationScreen}
      />
    </Stack.Navigator>
  );
}
function SettingStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
      // gestureEnalbe:true,
      // gestureDirection:'horizontal',
      // cardStyle:{ backgroundColor: 'transparent' },
      // cardOverlayEnabled:false,
      // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
       //...TransitionPresets.ModalPresentationIOS
    }}
    >
      <Stack.Screen name={Constant.SCREEN.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
}

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);
    function onRegister(token:string) {
      console.log('[App] onRegister: ', token);
      UserServices.SaveDeviceTokenService(token,dispatch);
    }
    function onNotification(notify:any,data?:any) {
      console.log('[App] onNotification: ', notify);
      const options = {
        soundName: 'default',
        playSound: true,
      };
      fcmService.receivedNotify(notify,data,dispatch);
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options,
      );
    }
    function onOpenNotification(notify:any) {
      console.log('[App] onOpenNotification: ', notify);
    }
    return () => {
      console.log('[App] unRegister');
      fcmService.unRegister();
      localNotificationService.unregister();
    };
  },[])
  const loadingStore = useSelector((state:any)=> state.Settings.loading);
//   useEffect(() => {
//    setTimeout(()=>{
//      settingsServices.ChangeLoadingApp(false,dispatch)
//    },1500)
//  }, []);
  return (
    
    <NavigationContainer>
      {loadingStore && (
      <View style={[styleIns.container, styleIns.horizontal, {opacity: 0.6}]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
     )}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Constant.SCREEN.LOGIN}
          //   options={options}
          component={LoginScreen}
        />
        <Stack.Screen
          name={Constant.SCREEN.REGISTER}
          //   options={options}
          component={RegisterScreen}
        />
        <Stack.Screen
          name={Constant.SCREEN.HOMESCREEN}
          //   options={options}
          component={BottomTab}
        />
        <Stack.Screen
          name={Constant.SCREEN.SETTING}
          //   options={options}
          component={SettingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
export default AppRouter;
