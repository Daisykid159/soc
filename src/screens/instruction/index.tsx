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
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, ToastAndroid} from 'react-native';
import {
  Dimensions,
  FlatList,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import ViewBackGround from '../../components/ViewBackGround';
import {Header} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import NotifyServices from '../../core/redux/services/NotifyServices';
import instructionServices from '../../core/redux/services/instructionServices';
import { PropsStyleTheme } from '../../config/theme';
const {width, height} = Dimensions.get('window');
const InstructionScreen = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const instructions = useSelector((state:any)=> state.Instruction.instructions);
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);

  const renderNews = ({ item, index }: any) => {
    return (
      <TouchableOpacity style={[styles.ViewChooseNoti,{backgroundColor:themStore.ColorCard}]} activeOpacity={0.7}
      onPress={()=>ToastAndroid.show('Comming Soon...',ToastAndroid.SHORT)}
      >
        <View style={{ width: 130, justifyContent: 'center', height: 200 }}>
          <Image
            source={item.image ? { uri: item.image } : require('../../assets/img/imageContainer/ic_background.jpg')}
            style={{
              height: 90,
              width: 100,
              alignSelf: 'center',
              borderRadius: 10,
            }}
          /> 
        </View>
        <View style={{ height: 110, width: width - 130 - 36, paddingRight: 10 }}>
          <Text
            numberOfLines={2}
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: '500',
              marginTop: 12,
              lineHeight: 20,
            }}>
            {item.instructionName || 'Title'}
          </Text>
          <Text
            numberOfLines={5}
            style={{
              color: 'white',
              fontSize: 12,
              fontWeight: '300',
              marginTop: 12,
              lineHeight: 20,
            }}>
            {item.description || 'description'}
          </Text>
          <View style={styles.ViewDate}>
            <Text style={styles.TxtDate}>{`${new Date(item.time).toLocaleDateString()} - ${new Date(item.time).toLocaleTimeString()}` || 'No date AM'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    instructionServices.GetAllInstructionService(dispatch);
    return () => {
      
    }
  }, [])
  return (
    <ViewBackGround>
      <Header backBtnEnable={true} textHeader={'Hướng dẫn an toàn'} />
      <View style={styles.container}>
        {/* <Text style={{fontSize:16,color:'white',textAlign:'right',marginRight:20}} >{useSelector((state:any)=> state.Notify.notifies).length} Thông báo</Text> */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal: 18}}
          data={instructions}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderNews}
        />
      </View>
    </ViewBackGround>
  );
};

export default InstructionScreen;
