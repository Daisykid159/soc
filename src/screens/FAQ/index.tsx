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
import FAQServices from '../../core/redux/services/FAQServices';
import styles from './styles';
const {width, height} = Dimensions.get('window');

const FAQScreen = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const FAQS = useSelector((state:any)=> state.FAQ.FAQS);
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);
  const renderFAQ = ({item, index}: any) => {
    return (
      <TouchableOpacity style={[styles.ViewChooseNoti,{backgroundColor:themStore.ColorCard}]}
      activeOpacity={0.7}
      onPress={()=>ToastAndroid.show('Comming Soon...',ToastAndroid.SHORT)}
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
        <View style={{height: '100%', width: width - 100, paddingRight: 40}}>
          <Text
            numberOfLines={2}
            style={{...styles.text,fontSize:16}}>
            {item.question}
          </Text>
          <Text
            numberOfLines={2}
            style={styles.text}>
            {item.answer}
          </Text>
        </View>
        <Text style={styles.TxtDate}>
              {item.time?`${new Date(parseInt(item.time)).toLocaleDateString()}-${new Date(parseInt(item.time)).toLocaleTimeString()}`:'25/06/2021 06:30 AM'}
          </Text>
      </TouchableOpacity>
    );
  };
  useEffect(()=>{
    FAQServices.GetAllFAQService(dispatch)
  },[])
  return (
    <ViewBackGround>
      <Header backBtnEnable={true} textHeader={'FAQ'} />
      <View style={styles.container}>
        <Text style={{fontSize:16,color:'white',textAlign:'right',marginRight:20}} >{useSelector((state:any)=> state.FAQ.FAQS).length} câu hỏi</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal: 18}}
          data={FAQS}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderFAQ}
        />
      </View>
    </ViewBackGround>
  );
};

export default FAQScreen;
