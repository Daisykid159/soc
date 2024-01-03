import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
var DeviceInfo = require('react-native-device-info');
import database from '@react-native-firebase/database';
import notifyAction from '../../core/redux/actions/notifyAction';
import * as Converter from "../../utils/converData";
import  Helper  from '../../utils/Helper';
import { ToastAndroid } from 'react-native';
class FCMService {
  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister);
    this.createNotificationListeners(
      onRegister,
      onNotification,
      onOpenNotification,
    );
  };

  registerAppWithFCM = async () => {
    if (Platform.OS === 'ios') {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
  };

  checkPermission = onRegister => {
    messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          // User has permissions
          this.getToken(onRegister);
        } else {
          // User doesn't have permission
          this.requestPermission(onRegister);
        }
      })
      .catch(error => {
        console.log('[FCMService] Permission rejected ', error);
      });
  };

  getToken = onRegister => {
    messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          onRegister(fcmToken);
        } else {
          console.log('[FCMService] User does not have a device token');
        }
      })
      .catch(error => {
        console.log('[FCMService] getToken rejected ', error);
      });
  };

  requestPermission = onRegister => {
    messaging()
      .requestPermission()
      .then(() => {
        this.getToken(onRegister);
      })
      .catch(error => {
        console.log('[FCMService] Request Permission rejected ', error);
      });
  };

  deleteToken = () => {
    console.log('[FCMService] deleteToken ');
    messaging()
      .deleteToken()
      .catch(error => {
        console.log('[FCMService] Delete token error ', error);
      });
  };

  createNotificationListeners = (
    onRegister,
    onNotification,
    onOpenNotification,
  ) => {
    // When the application is running, but in the background
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        '[FCMService] onNotificationOpenedApp Notification caused app to open from background state:',
        remoteMessage,
      );
      if (remoteMessage) {
        const notification = remoteMessage.notification;
        onOpenNotification(notification);
        // this.removeDeliveredNotification(notification.notificationId)
      }
    });

    // When the application is opened from a quit state.
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log(
          '[FCMService] getInitialNotification Notification caused app to open from quit state:',
          remoteMessage,
        );

        if (remoteMessage) {
          const notification = remoteMessage.notification;
          onOpenNotification(notification);
          //  this.removeDeliveredNotification(notification.notificationId)
        }
      });

    // Foreground state messages  
    this.messageListener = messaging().onMessage(async remoteMessage => {
      console.log('[FCMService] A new FCM message arrived!', remoteMessage);
      if (remoteMessage) {
        let notification = null;
        let data = null;
        if (Platform.OS === 'ios') {
          notification = remoteMessage.data.notification;
          data = remoteMessage.data.data;
        } else {
          notification = remoteMessage.notification;
          data = remoteMessage.data;
        }
        onNotification(notification,data);
      }
    });

    // Triggered when have new token
    messaging().onTokenRefresh(fcmToken => {
      console.log('[FCMService] New token refresh: ', fcmToken);
      onRegister(fcmToken);
    });
  };

  unRegister = () => {
    this.messageListener();
  };
   saveToken(token,roleName,ip,username) {
    if(token){
      var deviceId =  DeviceInfo.getUniqueId();
      database().ref('/devices').child(roleName=='user'?'users':roleName).child(deviceId).set({ip,token,username,connect:'true'})
        .then((abc) => console.log('Data updated.'+abc));
      console.log('SAVE TOKEN: ',deviceId,roleName,ip,token);
    }
  }
  async getAllNotify(dispatch){
    var deviceId =  DeviceInfo.getUniqueId();
    var notifies = [];
    const tablename = Helper.getDateNowString();
    const query = database().ref('/notify').child(`${deviceId}`).child(tablename);
    console.log('GET ALL NOTIFY',`/notify/${deviceId}/${tablename}`);
    
    const limitTimeOut = () =>{
      return new Promise( async resolve =>{
        const timer = setTimeout(()=>{
          resolve({})
          ToastAndroid.show("Get notify failure, checking connect ...",ToastAndroid.SHORT);
        },10000)
        query.once("value", function (snapshot) {
          resolve(snapshot.val());
          clearTimeout(timer)
       });
       
      })
    }
    notifies = await limitTimeOut();
    const action = notifyAction.Get_All_Notify(Converter.convertListNotify(notifies || []));
    dispatch(action);
  }
  async UpdateStatusNotifyOnFireBases(roleName){
    var deviceId =  DeviceInfo.getUniqueId();
    const query = database().ref('/devices').child(roleName=='user'?'users':roleName).child(deviceId).update({connect:'false'})
    .then(result => console.log(result))
  }

  async receivedNotify(object,data,dispatch){
    const tablename = Helper.getDateNowString();
    var deviceId =  DeviceInfo.getUniqueId();
    var _data = {};
    const values = database().ref('/notify').child(`${deviceId}`).child(tablename).child(data.id);
    await values.once('value',function(snapshot){
      console.table(snapshot.val());
      _data = snapshot.val();
    })
    console.log();
    const action = notifyAction.Received_Notify(Converter.convertSingleNotify(object,_data.data));
    dispatch(action)
  }
  async seenNotify(notify){
    var deviceId =  DeviceInfo.getUniqueId();
    const tablename = Helper.getDateNowString();
   await database().ref('/notify').child(`${deviceId}`).child(tablename).child(notify.id).child('data').update({seen:'true'})
    .then((query)=>{
    })
  }
  async deleteAllNotifInDay(dispatch){
    var deviceId =  DeviceInfo.getUniqueId();
    const tablename = Helper.getDateNowString();
    await database().ref('/notify').child(`${deviceId}`).child(tablename).remove()
    const action = notifyAction.Get_All_Notify(Converter.convertListNotify([]));
    dispatch(action);
  }
}

export const fcmService = new FCMService();
