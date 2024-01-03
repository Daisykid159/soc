/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//  import React from 'react';
//  import {
//    Text,
//    View,
//    StatusBar, ImageBackground, Dimensions
//  } from 'react-native';
//   import { useNavigation } from '@react-navigation/native';
//   import ViewBackGround from '../../components/ViewBackGround';
//  const {height, width} = Dimensions.get("window")
//  const HomeScreen= ()  => {
//    return (
//      <ViewBackGround >
//      </ViewBackGround>
//    );
//  };
//  export default HomeScreen;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList, Image, Text, TouchableOpacity, View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components';
import ViewBackGround from '../../components/ViewBackGround';
import { fcmService } from '../../config/FireBase/FCMService';
import { PropsStyleTheme } from '../../config/theme';
import NotifyServices from '../../core/redux/services/NotifyServices';
import styles from './styles';
const {width, height} = Dimensions.get('window');

const NotificationScreen = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const notifies = useSelector((state:any)=> state.Notify.notifies).sort((a:any,b:any)=> b.time - a.time);
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);
  
  const seeNotify = (item:any)=>{
    NotifyServices.ReadNotify(item,dispatch)
    navigator.navigate('DetailNotificationScreen',{idNotify:item.id});
  }
  const renderNotification = ({item, index}: any) => {
    return (
      <TouchableOpacity style={[styles.ViewChooseNoti,{backgroundColor:themStore.ColorCard}]}
      activeOpacity={0.7}
      onPress={()=>seeNotify(item)}
      >
        <View style={{width: 80, justifyContent: 'center', height: 110}}>
          <Image
            source={item.image?{uri:item.image}:require('../../assets/img/imageContainer/ic_background.jpg')}
            style={{
              height: 50,
              width: 50,
              alignSelf: 'center',
              borderRadius: 35,
            }}
          />
        </View>
        <View style={{height: 110, width: width - 80 - 36, paddingRight: 40}}>
          <Text
            numberOfLines={2}
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: '500',
              marginTop: 12,
              lineHeight: 20,
            }}>
            {item.title || `You received a warning for breaking the rules You received a warning
            for breaking the rules You received a warning for breaking the rules
            You received a warning for breaking the rules`}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: '500',
              marginTop: 12,
              lineHeight: 20,
            }}>
            {item.body || `You received a warning for breaking the rules You received a warning
            for breaking the rules You received a warning for breaking the rules
            You received a warning for breaking the rules`}
          </Text>
          <View style={styles.ViewDate}>
            <Text style={styles.TxtDate}>
              {item.time?`${new Date(parseInt(item.time)).toLocaleDateString()}-${new Date(parseInt(item.time)).toLocaleTimeString()}`:'25/06/2021 06:30 AM'}
              </Text>
          </View>
          {item.seen==false && (<View style={styles.ViewDot}></View>)}
        </View>
      </TouchableOpacity>
    );
  };
  const handleDeleteNotify =()=>{
      fcmService.deleteAllNotifInDay(dispatch);
  }
  return (
    <ViewBackGround>
      <Header backBtnEnable={false} textHeader={'Thông báo'} />
      <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
          <TouchableOpacity 
            activeOpacity={.7}
            onPress={()=>handleDeleteNotify()}
          >
            <Text style={{fontSize:16,color:'white'}}>Xóa tất cả</Text>
          </TouchableOpacity>
           
          <Text style={{fontSize:16,color:'white'}} >{useSelector((state:any)=> state.Notify.notifies).length} Thông báo</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal: 18}}
          data={notifies}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderNotification}
        />
      </View>
    </ViewBackGround>
  );
};

export default NotificationScreen;
