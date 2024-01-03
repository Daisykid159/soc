/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
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
import ViewBackGround from '../../../components/ViewBackGround';
import {Header, TextInputCtrl} from '../../../components';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../../assets/index';
import {BarChart, StackedBarChart} from 'react-native-chart-kit';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-tiny-toast';
import reportServices from '../../../core/redux/services/ReportServices';
import ButtonSearch from '../../../components/elementSearch';
import sharedStyles from '../../../assets/css/sharedStyle';
import { generalStyles } from '../../../general/styles';
import { PropsStyleTheme } from '../../../config/theme';
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#162235',
  barPercentage: 0.7,
  formatXLabel: (item: string) => {
    console.log(item);
    return parseInt(item).toPrecision();
  },
  // backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // màu line gradient
  strokeWidth: 1, // optional, default 3

  decimalPlaces: 0,
  useShadowColorFromDataset: false, // optional
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};
const {width, height} = Dimensions.get('window');

const ServiceScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const listRef = React.createRef<FlatList<any>>();
  const countAttack = useSelector((state: any) => state.Home.attack);
  const listAttack = useSelector((state: any) => state.Report.atttack_web);
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);
  const [list, setList] = useState(listAttack);
  const [loading, setLoading] = useState(false);
 // const [offset, setOffset] = useState(listAttack < 10 ? listAttack.length : 0);
 const [offset, setOffset] = useState(0);
 const _onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
   setOffset(viewableItems[0].index);
 }, []);
 
  useEffect(() => {
    setLoading(true);
    reportServices
      .GetAllAttackWebsite(dispatch)
      .finally(() => setLoading(false));
  }, []);
  var labels: Array<any> = [];
  var dataChart: Array<any> = [];
  countAttack.forEach((item: any, index: number) => {
    labels.push(item.key);
    dataChart.push([Math.floor(item.value)]);
  });
  const data = {
    labels: labels,
    data: dataChart,
    barColors: ['#dfe4ea'],
  };
  // const listShow =
  //   list.length < 10
  //     ? list
  //     : list.filter((item: any, index: number) => (index = offset + 5));
  // const next = () => {
  //   if (listAttack.length < 10) {
  //     Toast.show('End List');
  //   } else {
  //     if (offset >= listAttack.length - 1) {
  //       Toast.show('End List');
  //     } else {
  //       setOffset(offset + 5);
  //       listRef.current?.scrollToIndex({
  //         index: offset + 4,
  //         animated: true,
  //       });
  //     }
  //   }
  // };
  // const previous = () => {
  //   if (offset !== 0) {
  //     setOffset(offset - 5);
  //     listRef.current?.scrollToIndex({
  //       index: offset - 1,
  //       animated: true,
  //     });
  //   }
  // };
  return (
    <View style={{flex: 1}}>
      <ViewBackGround>
        <Header backBtnEnable={true} textHeader={'Dịch Vụ'} />
        <View style={styles.container}>
          <View style={[styles.container1,{backgroundColor:themStore.ColorCard}]}>
            <Text
              style={[generalStyles.titleLeft,{marginTop: 12}]}>
              Top cảnh báo tấn công
            </Text>
            <View style={styles.ViewWrapDes}>
              <StackedBarChart
                data={data}
                width={width}
                height={height * 0.25}
                chartConfig={chartConfig}
              />
              {/* <GroupBarChart /> */}
            </View>
          </View>

          <View style={[styles.container2,{backgroundColor:themStore.ColorCard}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Text
                style={[generalStyles.titleLeft,{
                  marginTop: 12,
                  position: 'absolute',
                  left: 0,
                }]}>
                Chi tiết tấn công web
              </Text>
              <ButtonSearch setState={setList} origin={listAttack} />
            </View>
            <View style={styles.ViewTitle1}>
              <View
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  paddingLeft: 18,
                }}>
                <Text style={styles.TxtTitle1}>IP nguồn</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <Text style={styles.TxtTitle1}>IP Đích</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <Text style={styles.TxtTitle1}>Loại TC</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <Text style={styles.TxtTitle1}>Thời gian</Text>
              </View>
            </View>
            <View style={{marginHorizontal: 12, flex: 1}}>
              {loading ? (
                <ActivityIndicator size="large" color="#fff" />
              ) : listAttack.length == 0 ? (
                <Text style={sharedStyles.noData}>No Data Collected</Text>
              ) : (
                <FlatList
                  ref={listRef}
                  data={list}
                  scrollEnabled
                  keyExtractor={(item, index) => `${index}`}
                  onViewableItemsChanged={_onViewableItemsChanged}
                  viewabilityConfig={{
                    itemVisiblePercentThreshold: 50,
                  }}
                  renderItem={({item}) => (
                    <View style={styles.ViewDes}>
                      <View
                        style={{
                          width: '25%',
                          justifyContent: 'center',
                          paddingLeft: 18,
                        }}>
                        <Text style={styles.TxtDes} numberOfLines={2}>
                          {item.source_ip}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '25%',
                          justifyContent: 'center',
                          paddingLeft: 12,
                        }}>
                        <Text style={styles.TxtDes} numberOfLines={2}>
                          {item.destination_ip}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '20%',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.TxtTitle1}>{item.category}</Text>
                      </View>
                      <View
                        style={{
                          width: '30%',
                          justifyContent: 'center',
                          paddingLeft: 12,
                        }}>
                        <Text numberOfLines={2} style={styles.TxtDes}>
                          {new Date(item.time).toLocaleDateString() +
                            ` - ` +
                            new Date(item.time).toLocaleTimeString()}
                        </Text>
                      </View>
                    </View>
                  )}
                />
              )}
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
              {/* {offset >= 0 && (
                <Text
                  style={[styles.TxtTitle1, {color: '#13C8FF', fontSize: 12}]}
                  onPress={previous}>
                  Sau
                </Text>
              )} */}
              <Text style={[styles.TxtTitle1, {fontSize: 12}]}>
                {offset} / {list.length} bản ghi
              </Text>
              {/* {offset < 100 && (
                <Text
                  style={[styles.TxtTitle1, {color: '#13C8FF', fontSize: 12}]}
                  onPress={next}>
                  tiếp
                </Text>
              )} */}
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
        </View>
      </ViewBackGround>
    </View>
  );
};
export default ServiceScreen;
