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
import React, { useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Easing } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { svgs } from '../../../assets';
import { Header } from '../../../components';
import ViewBackGround from '../../../components/ViewBackGround';
import styles from './styles';
const {width, height} = Dimensions.get('screen');

const DetailNotificationScreen = ({route, navigation}) => {
  const notify = useSelector((state: any) => state.Notify.notifies).find(
    (item: any) => item.id == route.params.idNotify,
  );
  const [notifyDetail,setNotifyDetail] = useState<any|null>(null);
  const [visible, setVisible] = useState(false);
  const data = JSON.parse(notify.data.value || []);
  const [alignment] = useState(new Animated.Value(0));
  const bringUpActionSheet = (item:any) => {
    setNotifyDetail(item);
    Animated.timing(alignment, {
      toValue: visible ? 0 : 1,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    setVisible(!visible);
  };
  const actionSheetIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [0,height*0.5],
  });
  return (
    <ViewBackGround>
      <Header backBtnEnable={true} textHeader={'Thông báo'} />
      <Text
        style={{
          fontSize: 16,
          color: 'white',
          textAlign: 'right',
          marginRight: 20,
        }}>
        {data.length} Cảnh báo
      </Text>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontWeight: '600',
              color: 'white',
              fontSize: 16,
              marginLeft: 25,
              fontStyle: 'italic',
              marginTop: 12,
            }}>
            Danh sách vi phạm
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              marginRight: 25,
              height: 30,
              width: 30,
              borderRadius: 15,
              backgroundColor: '#152F3E',
              alignItems: 'center',
              marginTop: 6,
            }}>
            <SvgXml xml={`${svgs.SvgSearch}`} height={14} width={14} />
          </TouchableOpacity>
        </View>
        <View style={styles.ViewTitle1}>
          <View
            style={{
              width: '30%',
              justifyContent: 'center',
              paddingLeft: 18,
            }}>
            <Text style={styles.TxtTitle1}>IP nguồn</Text>
          </View>
          <View
            style={{
              width: '30%',
              justifyContent: 'center',
              paddingLeft: 12,
            }}>
            <Text style={styles.TxtTitle1}>IP Đích</Text>
          </View>
          <View
            style={{
              width: '40%',
              justifyContent: 'center',
              paddingLeft: 12,
            }}>
            <Text style={styles.TxtTitle1}>Nội dung vi phạm</Text>
          </View>
          <View
            style={{
              width: 30,
              justifyContent: 'center',
              paddingLeft: 12,
            }}></View>
        </View>
        <View style={{marginHorizontal: 12, flex: 1, paddingBottom: 10}}>
          <FlatList
            data={data}
            scrollEnabled
            nestedScrollEnabled
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.ViewDes}
                activeOpacity={0.7}
                onPress={() => bringUpActionSheet(item)}>
                <View
                  style={{
                    width: '30%',
                    justifyContent: 'center',
                    paddingLeft: 18,
                  }}>
                  <Text style={styles.TxtDes} numberOfLines={2}>
                    {item.source_ip}
                  </Text>
                </View>
                <View
                  style={{
                    width: '30%',
                    justifyContent: 'center',
                    paddingLeft: 12,
                  }}>
                  <Text style={styles.TxtDes} numberOfLines={2}>
                    {item.destination_ip}
                  </Text>
                </View>
                <View
                  style={{
                    width: '40%',
                    justifyContent: 'center',
                    paddingLeft: 12,
                  }}>
                  <Text numberOfLines={2} style={styles.TxtDes}>
                    {item.alert}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
          <TouchableOpacity 
            style={{width:visible?width:0,height:visible?height:0,position:'absolute',backgroundColor:'rgba(0,0,0,.5)'}}
            onPress={()=>bringUpActionSheet(null)}
          >
         </TouchableOpacity>
         <Animated.View style={{...styles.sheet, height: actionSheetIntropolate}}>
            <View>
              <ScrollView nestedScrollEnabled style={styles.grabber}></ScrollView>
              <Text style={styles.title}>Nội dung</Text>
            </View>
                  <ScrollView
                  scrollEnabled
                  nestedScrollEnabled
                  showsVerticalScrollIndicator
                  style={{flex:1,marginBottom:72,marginTop:20,paddingHorizontal:10}}
                  >
                    <View style={styles.row}>
                      <Text style={styles.title}>IP Source</Text>
                      <Text style={styles.text}>{notifyDetail?notifyDetail.source_ip:'nothing'}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.title} >IP Destination</Text>
                      <Text style={styles.text}>{notifyDetail?notifyDetail.destination_ip:'nothing'}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.title}>Content Vilolate</Text>
                      <Text style={styles.text}>{notifyDetail?notifyDetail.alert:'nothing'}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.title}>Time</Text>
                      <Text style={styles.text}>{notifyDetail?`${new Date(notifyDetail.time).toLocaleDateString()} - ${new Date(notifyDetail.time).toLocaleTimeString()}`:'nothing'}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.title}>IP Source</Text>
                      <Text style={styles.text}>{notifyDetail?notifyDetail.source_ip:'nothing'}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.title} >IP Destination</Text>
                      <Text style={styles.text}>{notifyDetail?notifyDetail.destination_ip:'nothing'}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.title}>Content Vilolate</Text>
                      <Text style={styles.text}>{notifyDetail?notifyDetail.alert:'nothing'}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.title}>Time</Text>
                      <Text style={styles.text}>{notifyDetail?`${new Date(notifyDetail.time).toLocaleDateString()} - ${new Date(notifyDetail.time).toLocaleTimeString()}`:'nothing'}</Text>
                    </View>
                  </ScrollView>
          </Animated.View>
    </ViewBackGround>
  );
};
export default DetailNotificationScreen;
