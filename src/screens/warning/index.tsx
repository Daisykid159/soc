/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, FlatList, Text, View} from 'react-native';
import Toast from 'react-native-tiny-toast';
import {useDispatch, useSelector} from 'react-redux';
import sharedStyles from '../../assets/css/sharedStyle';
import {Header} from '../../components';
import ButtonSearch from '../../components/elementSearch';
import ViewBackGround from '../../components/ViewBackGround';
import { PropsStyleTheme } from '../../config/theme';
import WarnningServices from '../../core/redux/services/WarnningServices';
import { generalStyles } from '../../general/styles';
import styles from './styles';
const {width, height} = Dimensions.get('window');

const WarningScreen = () => {
  const listRef = React.createRef<FlatList<any>>();

  const dispatch = useDispatch();
  const countWarnning = useSelector((state: any) => state.Home.warnning);
  const listWarnning = useSelector((state: any) => state.Warnning.warnnings);
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);
  const [list, setList] = useState(listWarnning);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    WarnningServices.GetAllService(dispatch).then(res => {}).finally(()=>setLoading(false));
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
        <Header backBtnEnable={true} textHeader={'Cảnh báo'} />
        <View style={styles.container}>
          <View style={{...styles.container1,backgroundColor:themStore.ColorCard}}>
            <Text
              style={generalStyles.titleLeft}>
              Thống kê vi phạm
            </Text>
            <View style={styles.ViewTitle1}>
              <View
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  paddingLeft: 18,
                }}>
                <Text style={styles.TxtTitle1}>Tỉ lệ</Text>
              </View>
              <View
                style={{
                  width: '75%',
                  justifyContent: 'center',
                }}>
                <Text style={styles.TxtTitle1}>Nội dung vi phạm</Text>
              </View>
            </View>
            <View style={styles.ViewWrapDes}>
              <FlatList
                data={countWarnning}
                scrollEnabled
                keyExtractor={(item, index) => `${index}`}
                renderItem={({item}) => (
                  <View style={styles.ViewDes}>
                    <View
                      style={{
                        paddingLeft: 18,
                        width: '25%',
                        paddingRight: 12,
                      }}>
                      <Text
                        style={[
                          styles.TxtDes,
                          {color: item.color || '#DE4242'},
                        ]}
                        numberOfLines={1}>
                        {item.value} %
                      </Text>
                    </View>

                    <View
                      style={{
                        width: '75%',
                        paddingRight: 12,
                      }}>
                      <Text numberOfLines={1} style={styles.TxtDes}>
                        {item.key}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>

          <View style={{...styles.container2,backgroundColor:themStore.ColorCard}}>
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
                  position: 'absolute',
                  left: 0,
                }}>
                Danh sách vi phạm
              </Text>
              <ButtonSearch setState={setList} origin={listWarnning} />
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
            <View style={{marginHorizontal: 12, flex: 1}}>
            {
              loading ? <ActivityIndicator size="large" color="#fff"/> :(
                listWarnning.length == 0 ? (
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
                      </View>
                    )}
                  />
                )
              )
            }
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
                {offset} trong {list.length} bản ghi
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
export default WarningScreen;
