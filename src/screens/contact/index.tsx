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
import React, { useEffect } from 'react';
import {
  Dimensions,
  FlatList, Image, Text, ToastAndroid, TouchableOpacity, View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components';
import ViewBackGround from '../../components/ViewBackGround';
import { PropsStyleTheme } from '../../config/theme';
import contactServices from '../../core/redux/services/contactServices';
import styles from './styles';
const {width, height} = Dimensions.get('window');
const ContactScreen = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const contacts = useSelector((state:any)=> state.Contact.contacts);
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);

  const renderContact = ({item, index}: any) => {
    return (
      <TouchableOpacity style={[styles.ViewChooseNoti,{backgroundColor:themStore.ColorCard}]}
      activeOpacity={0.7}
      onPress={()=>ToastAndroid.show('Comming Soon...',ToastAndroid.SHORT)}
      >
       
        <View style={{width:width-80}}>
          <Text
            numberOfLines={2}
            style={{...styles.text,fontWeight:'700',fontSize:19}}>
            {item.name}
          </Text>
          <Text
            numberOfLines={1}
            style={styles.text}>
            {item.email}
          </Text>
          <Text
            numberOfLines={1}
            style={styles.text}>
            {item.phone}
          </Text>
          <Text style={{...styles.TxtDate,marginTop:10}}>
            {item.time?`${new Date(parseInt(item.time)).toLocaleDateString()}-${new Date(parseInt(item.time)).toLocaleTimeString()}`:'25/06/2021 06:30 AM'}
            </Text>
        </View>
        <View style={{width: 80, justifyContent: 'center', height: 80,position:'absolute',top:10,right:10}}>
          <Image
            source={item.image?{uri:item.image}:require('../../assets/img/imageContainer/ic_background.jpg')}
            style={{
              height: 70,
              width: 70,
              alignSelf: 'center',
              borderRadius: 35,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    contactServices.GetAllContactService(dispatch)
    return () => {
     
    }
  }, [])
  return (
    <ViewBackGround>
      <Header backBtnEnable={true} textHeader={'Liên hệ'} />
      <View style={styles.container}>
        <Text style={{fontSize:16,color:'white',textAlign:'right',marginRight:20}} >{useSelector((state:any)=> state.Contact.contacts).length} Liên hệ</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal: 18}}
          data={contacts}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderContact}
        />
      </View>
    </ViewBackGround>
  );
};

export default ContactScreen;
