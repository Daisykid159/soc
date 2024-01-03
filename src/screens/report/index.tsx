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
  FlatList, ScrollView, Text, TouchableOpacity, View
} from 'react-native';
import 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { svgs } from '../../assets/index';
import { Header, TextInputCtrl } from '../../components';
import ViewBackGround from '../../components/ViewBackGround';
import { PropsStyleTheme } from '../../config/theme';
import styles from './styles';

const {width, height} = Dimensions.get('window');
const data = [
  {
    title: 'Lớp mạng',
    path: 'NetWorkScreen',
    svgPath: svgs.SvgWarning,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    title: 'Lớp thiết bị đầu cuối',
    path: 'TerminalScreen',
    svgPath: svgs.SvgDevices,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    title: `Lớp dịch vụ`,
    path: 'ServiceScreen',
    svgPath: svgs.SvgNews,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    title: `Lớp chính sách`,
    path: 'PolicyScreen',
    svgPath: svgs.SvgEarth,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
];
const ReportScreen = () => {
  const navigation = useNavigation();
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);

  return (
    <View style={{flex: 1}}>
      <ViewBackGround>
        <Header backBtnEnable={true} textHeader={'Báo cáo'} />
        <ScrollView style={styles.container}>
          <View style={{...styles.container1,backgroundColor:themStore.ColorCard}}>
            <View style={{margin: 18}}>
              <TextInputCtrl
                IconLeft={
                  <SvgXml xml={`${svgs.SvgSearch}`} width={18} height={18} />
                }
                placeholder={''}
                style={{
                  paddingHorizontal: 40,
                  backgroundColor: '#202844',
                  borderRadius: 20,
                  marginHorizontal: 40,
                }}
                onChangeText={(text: string) => console.log(text)}
                containerStyleIconLeft={{alignItems: 'flex-end'}}
              />
            </View>

            <View style={{marginHorizontal: 18}}>
              <FlatList
                data={data}
                // extraData={data.data}
                scrollEnabled
                keyExtractor={(item, index) => `${index}`}
                // contentContainerStyle={{
                // }}
                // columnWrapperStyle={{
                //   flexDirection: 'row',
                //   justifyContent: 'space-around',
                //   alignItems: 'center',
                // }}
                renderItem={({item}) => (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      navigation.navigate(item.path);
                    }}
                    style={styles.TouchableChoose}>
                    <View
                      style={{
                        width: 60,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgXml xml={`${item.svgPath}`} width={30} height={30} />
                    </View>

                    <View
                      style={{
                        width: width - 60 - 30,
                        height: 60,
                        paddingRight: 16,
                        justifyContent: 'center',
                        borderBottomWidth: 0.5,
                        // paddingLeft: 6,
                      }}>
                      <Text numberOfLines={1} style={styles.TxtTitle}>
                        {item.title}
                      </Text>
                      <Text numberOfLines={1} style={styles.TxtDes}>
                        {item.des}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </ViewBackGround>
    </View>
  );
};
export default ReportScreen;
