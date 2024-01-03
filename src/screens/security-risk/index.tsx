/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import ViewBackGround from '../../components/ViewBackGround';
import {Header, TextInputCtrl} from '../../components';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../assets/index';
import { PropsStyleTheme } from '../../config/theme';
import { useSelector } from 'react-redux';

const {width, height} = Dimensions.get('window');
const data = [
  {
    title: 'Lớp mạng',
    path: 'EmergencyScreen',
    svgPath: svgs.SvgWarning,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    title: 'Lớp thiết bị đầu cuối',
    path: 'ReportScreen',
    svgPath: svgs.SvgReport,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    title: `Lớp dịch vụ`,
    path: 'NewsScreen',
    svgPath: svgs.SvgNews,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    title: `Lớp chính sách`,
    path: 'WarningScreen',
    svgPath: svgs.SvgEarth,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
];
const data1 = [
  {
    IP1: '10.10.1.2',
    IP2: '10.10.1.2',
    inturn: 234,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    IP1: '10.10.1.2',
    IP2: '10.10.1.2',
    inturn: 234,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    IP1: '10.10.1.2',
    IP2: '10.10.1.2',
    inturn: 234,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    IP1: '10.10.1.2',
    IP2: '10.10.1.2',
    inturn: 234,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    IP1: '10.10.1.2',
    IP2: '10.10.1.2',
    inturn: 234,
    des: 'Báo cáo dữ liệu lớp mạng',
  },

  {
    IP1: '10.10.1.2',
    IP2: '10.10.1.2',
    inturn: 234,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
  {
    IP1: '10.10.1.2',
    IP2: '10.10.1.2',
    inturn: 234,
    des: 'Báo cáo dữ liệu lớp mạng',
  },
];
const SecurityRickScreen = () => {
  const navigation = useNavigation();
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);
 
  return (
    <View style={{flex: 1}}>
      <ViewBackGround>
        <Header backBtnEnable={true} textHeader={'Nguy cơ an ninh'} />
        <ScrollView style={styles.container}>
          <View style={[styles.container1,{backgroundColor:themStore.ColorCard}]}>
            <Text
              style={{
                fontWeight: '600',
                color: 'white',
                fontSize: 16,
                marginLeft: 25,
                fontStyle: 'italic',
                marginTop: 12,
              }}>
              Thống kê vi phạm
            </Text>
            <View style={styles.ViewTitle1}>
              <View
                style={{
                  width: 100,
                  justifyContent: 'center',
                  paddingLeft: 18,
                }}>
                <Text style={styles.TxtTitle1}>Tỉ lệ</Text>
              </View>
              <View
                style={{
                  width: width - 100 - 20 - 24,
                  justifyContent: 'center',
                }}>
                <Text style={styles.TxtTitle1}>Nội dung vi phạm</Text>
              </View>
            </View>
            <View style={styles.ViewWrapDes}>
              <View style={styles.ViewDes}>
                <View
                  style={{
                    paddingLeft: 18,
                    width: 100,
                    paddingRight: 12,
                  }}>
                  <Text
                    style={[styles.TxtDes, {color: '#DE4242'}]}
                    numberOfLines={2}>
                    12 %
                  </Text>
                </View>

                <View
                  style={{
                    width: width - 100 - 20 - 24,
                    paddingRight: 12,
                  }}>
                  <Text numberOfLines={2} style={styles.TxtDes}>
                    Cài đặt BTN
                  </Text>
                </View>
              </View>
              <View style={styles.ViewDes}>
                <View
                  style={{
                    paddingLeft: 18,
                    width: 100,
                    paddingRight: 12,
                  }}>
                  <Text
                    style={[styles.TxtDes, {color: '#FEEE0E'}]}
                    numberOfLines={2}>
                    8 %
                  </Text>
                </View>

                <View
                  style={{
                    width: width - 100 - 20 - 24,
                    paddingRight: 12,
                  }}>
                  <Text numberOfLines={2} style={styles.TxtDes}>
                    Truy Cập Website Cấm
                  </Text>
                </View>
              </View>
              <View style={styles.ViewDes}>
                <View
                  style={{
                    paddingLeft: 18,
                    width: 100,
                    paddingRight: 12,
                  }}>
                  <Text
                    style={[styles.TxtDes, {color: '#8D8B71'}]}
                    numberOfLines={2}>
                    80 %
                  </Text>
                </View>

                <View
                  style={{
                    width: width - 100 - 20 - 24,
                    paddingRight: 12,
                  }}>
                  <Text numberOfLines={2} style={styles.TxtDes}>
                    Các Vi Phạm Khác
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.container2,{backgroundColor:themStore.ColorCard}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                  width: 80,
                  justifyContent: 'center',
                  paddingLeft: 18,
                }}>
                <Text style={styles.TxtTitle1}>IP nguồn</Text>
              </View>
              <View
                style={{
                  width: 80,
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <Text style={styles.TxtTitle1}>IP Đích</Text>
              </View>
              <View
                style={{
                  width: width - 30 - 160 - 20 - 24,
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
            <View style={{marginHorizontal: 12, height: height - 400 - 130}}>
              <FlatList
                data={data1}
                scrollEnabled
                keyExtractor={(item, index) => `${index}`}
                renderItem={({item}) => (
                  <View style={styles.ViewDes}>
                    <View
                      style={{
                        width: 80,
                        justifyContent: 'center',
                        paddingLeft: 18,
                      }}>
                      <Text style={styles.TxtDes} numberOfLines={2}>
                        {item.IP1}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 80,
                        justifyContent: 'center',
                        paddingLeft: 12,
                      }}>
                      <Text style={styles.TxtDes} numberOfLines={2}>
                        {item.IP2}
                      </Text>
                    </View>

                    <View
                      style={{
                        width: width - 50 - 160 - 20 - 24,
                        justifyContent: 'center',
                        paddingLeft: 12,
                      }}>
                      <Text numberOfLines={2} style={styles.TxtDes}>
                        {item.des}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 50,
                        justifyContent: 'center',
                        paddingLeft: 12,
                      }}>
                      <Text style={styles.TxtTitle1}>. . .</Text>
                    </View>
                  </View>
                )}
              />
            </View>
            <View
              style={[
                styles.ViewTitle1,
                {
                  backgroundColor: '#152F3E',
                  justifyContent: 'space-between',
                  paddingHorizontal: 30,
                  height: 30,
                  marginBottom: 0,
                },
              ]}>
              <Text
                style={[styles.TxtTitle1, {color: '#13C8FF', fontSize: 12}]}>
                Sau
              </Text>
              <Text style={[styles.TxtTitle1, {fontSize: 12}]}>
                10 trong 100 bản ghi
              </Text>
              <Text
                style={[styles.TxtTitle1, {color: '#13C8FF', fontSize: 12}]}>
                tiếp
              </Text>
            </View>
            <Text
              style={[
                styles.TxtTitle1,
                {
                  color: '#8993C9',
                  fontSize: 10,
                  alignSelf: 'center',
                  marginVertical: 6,
                },
              ]}>
              2021 |Soc Mobile BKAV
            </Text>
          </View>
        </ScrollView>
      </ViewBackGround>
    </View>
  );
};
export default SecurityRickScreen;
