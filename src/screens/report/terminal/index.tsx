/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import {svgs} from '../../../assets/index';
import {Header} from '../../../components';
import ProgressCircle from '../../../components/svgPropgress';
import ViewBackGround from '../../../components/ViewBackGround';
import styles from './styles';
import reportServices from '../../../core/redux/services/ReportServices';
import {addFieldColorRandom, generatorsColor} from '../../../utils/converData';
import ButtonSearch from '../../../components/elementSearch';
import sharedStyles from '../../../assets/css/sharedStyle';
import { generalStyles } from '../../../general/styles';
import { PropsStyleTheme } from '../../../config/theme';

const TerminalScreen = () => {
  const [dataChart, setDataChart] = useState([]);
  const [dataDes, setDataDes] = useState([]);
  const [dataVulner, setDataVulner] = useState([]);
  const [dataVulDes, setDataVulnerDes] = useState([]);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const countOs = useSelector((state: any) => state.Home.os);
  const countvulnerability = useSelector(
    (state: any) => state.Home.vulnerability,
  );
  const listMachine = useSelector((state: any) => state.Report.machine_malware);
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);

  const [list, setList] = useState(() => listMachine);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const _onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    setOffset(viewableItems[0].index);
  }, []);
  useEffect(() => {
    setLoading(true);
    reportServices
      .GetAlltMachineMalware(dispatch)
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    // add màu vào array
    const data = addFieldColorRandom(countOs);
    var arrayChart: any = [
      {
        key: 'rest',
        value: 0,
        color: '#434C78',
      },
    ];
    // push vào array chart
    data?.map((item?: any, index?: any) => {
      let obj = {
        key: item.key,
        value: item.value,
        color: item.color,
      };
      arrayChart.push(obj);
    });

    // push vào array gồm title và mà của nó
    var arrayDes: any = [];
    data?.map((item?: any, index?: any) => {
      let obj1 = {
        name: item.key,
        color: item.color,
      };
      arrayDes.push(obj1);
    });

    var arrayVulDes: any = [];
    countvulnerability?.map((item?: any, index?: any) => {
      let obj1 = {
        name: item.key,
        color: item.color,
      };
      arrayVulDes.push(obj1);
    });

    // set state device
    setDataChart(arrayChart);
    setDataDes(arrayDes);

    //set state lo hong
    setDataVulnerDes(arrayVulDes);
    setDataVulner(countvulnerability);
  }, []);

  return (
    <View style={{flex: 1}}>
      <ViewBackGround>
        <Header backBtnEnable={true} textHeader={'Thiết bị đầu cuối'} />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.container1,{backgroundColor:themStore.ColorCard}]}>
            <Text
              style={{
                ...generalStyles.titleLeft,
                marginVertical: 12,
              }}>
              Thống kê hệ điều hành
            </Text>
            <ProgressCircle
              style={{height: 140}}
              progress={0.7}
              progressColor={'rgb(134, 65, 244)'}
              strokeWidth={30}
              cornerRadius={20}
              dataChart={dataChart}
              dataDes={dataDes}
            />
          </View>
          <View style={[styles.container1, {backgroundColor:themStore.ColorCard,marginTop: 12}]}>
            <Text
              style={{
                ...generalStyles.titleLeft,
                marginVertical: 12,
              }}>
              Thống kê hệ lỗ hổng
            </Text>
            <ProgressCircle
              style={{height: 140}}
              progress={0.7}
              progressColor={'rgb(134, 65, 244)'}
              strokeWidth={30}
              cornerRadius={20}
              dataChart={dataVulner}
              dataDes={dataVulDes}
            />
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
                style={{
                  ...generalStyles.titleLeft,
                  marginVertical: 20,
                  position: 'absolute',
                  left: 0,
                }}>
                Máy tính có hành vi bất thường
              </Text>
              <ButtonSearch setState={setList} origin={listMachine} />
            </View>
            <View style={styles.ViewTitle1}>
              <View
                style={{
                  width: '30%',
                  justifyContent: 'center',
                  paddingLeft: 18,
                }}>
                <Text style={styles.TxtTitle1}>Tên máy</Text>
              </View>
              <View
                style={{
                  width: '30%',
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <Text style={styles.TxtTitle1}>IP</Text>
              </View>
              <View
                style={{
                  width: '40%',
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <Text style={styles.TxtTitle1}>Mã độc</Text>
              </View>
            </View>
            <View style={{marginHorizontal: 12, height: 160}}>
              {loading ? (
                <ActivityIndicator size="large" color="#fff" />
              ) : listMachine.length == 0 ? (
                <Text style={sharedStyles.noData}>No Data Collected</Text>
              ) : (
                <FlatList
                  data={list}
                  // scrollEnabled
                  nestedScrollEnabled
                  keyExtractor={(item, index) => `${index}`}
                  onViewableItemsChanged={_onViewableItemsChanged}
                  viewabilityConfig={{
                    itemVisiblePercentThreshold: 20
                  }}
                  renderItem={({item}) => (
                    <View style={styles.ViewDes}>
                      <View
                        style={{
                          width: '30%',
                          justifyContent: 'center',
                          paddingLeft: 18,
                        }}>
                        <Text style={styles.TxtDes} numberOfLines={2}>
                          {item.hostname}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '30%',
                          justifyContent: 'center',
                          paddingLeft: 12,
                        }}>
                        <Text style={styles.TxtDes} numberOfLines={2}>
                          {item.source_ip}
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
              {/* <Text
                style={[styles.TxtTitle1, {color: '#13C8FF', fontSize: 12}]}>
                Sau
              </Text> */}
              <Text style={[styles.TxtTitle1, {fontSize: 12}]}>
                {offset} / {list.length} bản ghi
              </Text>
              {/* <Text
                style={[styles.TxtTitle1, {color: '#13C8FF', fontSize: 12}]}>
                tiếp
              </Text> */}
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
export default TerminalScreen;
