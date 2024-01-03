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
  Text,
  View,
} from 'react-native';
import Toast from 'react-native-tiny-toast';
import {useDispatch, useSelector} from 'react-redux';
import sharedStyles from '../../../assets/css/sharedStyle';
import {Header} from '../../../components';
import ButtonSearch from '../../../components/elementSearch';
import ViewBackGround from '../../../components/ViewBackGround';
import {PropsStyleTheme} from '../../../config/theme';
import reportServices from '../../../core/redux/services/ReportServices';
import {generalStyles} from '../../../general/styles';
import styles from './styles';
const {width, height} = Dimensions.get('window');
const PolicyScreen = () => {
  const listRef = React.createRef<FlatList<any>>();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const countViolate = useSelector((state: any) => state.Home.violate);
  const listViolate = useSelector((state: any) => state.Report.violates);
  const themStore: PropsStyleTheme = useSelector(
    (state: any) => state.Settings.theme,
  );
  const [list, setList] = useState(() => listViolate);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    reportServices
      .GetAllViolatePolicy(dispatch)
      .finally(() => setLoading(false));
  }, []);
  const [offset, setOffset] = useState(0);
  const _onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    setOffset(viewableItems[0].index);
  }, []);
  // const listShow = list.filter(
  //   (item: any, index: number) => index <= offset + 5,
  // );
  // const next = () => {
  //   if (offset >= 99) {
  //     Toast.show('End List');
  //   } else {
  //     setOffset(offset + 5);
  //     listRef.current?.scrollToIndex({
  //       index: offset + 4,
  //       animated: true,
  //     });
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
        <Header backBtnEnable={true} textHeader={'Chính sách'} />
        <View style={styles.container}>
          <View
            style={[styles.container1, {backgroundColor: themStore.ColorCard}]}>
            <Text style={[generalStyles.titleLeft, {marginTop: 12}]}>
              Thống kê vi phạm chính sách
            </Text>
            <View style={styles.ViewTitle1}>
              <View
                style={{
                  width: '60%',
                  justifyContent: 'center',
                  paddingLeft: 18,
                }}>
                <Text style={styles.TxtTitle1}>Nội dung</Text>
              </View>
              <View
                style={{
                  width: '40%',
                  justifyContent: 'center',
                }}>
                <Text style={styles.TxtTitle1}>Số tài khoản vi phạm</Text>
              </View>
            </View>
            <View style={styles.ViewWrapDes}>
              <FlatList
                data={countViolate}
                scrollEnabled
                nestedScrollEnabled
                keyExtractor={(item, index) => `${index}`}
                renderItem={({item}) => (
                  <View style={styles.ViewDes}>
                    <View
                      style={{
                        paddingLeft: 18,
                        width: '60%',
                        paddingRight: 12,
                      }}>
                      <Text style={styles.TxtDes} numberOfLines={2}>
                        {item.key}
                      </Text>
                    </View>

                    <View
                      style={{
                        width: '40%',
                        paddingRight: 12,
                      }}>
                      <Text numberOfLines={2} style={styles.TxtDes}>
                        {item.value} thiết bị
                      </Text>
                    </View>
                  </View>
                )}
              />
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

          <View
            style={[styles.container2, {backgroundColor: themStore.ColorCard}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Text
                style={[
                  generalStyles.titleLeft,
                  {marginTop: 12, position: 'absolute', left: 0},
                ]}>
                Thống kê
              </Text>
              <ButtonSearch setState={setList} origin={listViolate} />
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
                  width: '15%',
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <Text style={styles.TxtTitle1}>Lượt</Text>
              </View>
              <View
                style={{
                  width: '35%',
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <Text style={styles.TxtTitle1}>Cảnh báo TCM</Text>
              </View>
            </View>
            <View style={{marginHorizontal: 12, flex: 1}}>
              {loading ? (
                <ActivityIndicator size="large" color="#fff" />
              ) : listViolate.length == 0 ? (
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
                          width: '15%',
                          justifyContent: 'center',
                          paddingLeft: 12,
                        }}>
                        <Text style={styles.TxtTitle1}>{item.times}</Text>
                      </View>
                      <View
                        style={{
                          width: '35%',
                          justifyContent: 'center',
                          paddingLeft: 12,
                        }}>
                        <Text numberOfLines={2} style={styles.TxtDes}>
                          {item.policy}
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
export default PolicyScreen;
