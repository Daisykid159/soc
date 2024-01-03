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
import ViewBackGround from '../../../components/ViewBackGround';
import {Header, TextInputCtrl} from '../../../components';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../../assets/index';
import {ProgressChart, LineChart} from 'react-native-chart-kit';
import ProgressCircle from '../../../components/svgPropgress';
const {width, height} = Dimensions.get('window');
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#162235',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `#E923FF`, // màu line gradient
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const data = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 99],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      // strokeWidth: 2 // optional
    },
  ],
};
const NetWorkScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ViewBackGround>
        <Header backBtnEnable={true} textHeader={'Lớp mạng'} />
        <ScrollView style={styles.container}>
          <View style={styles.container1}>
            <Text
              style={{
                fontWeight: '600',
                color: 'white',
                fontSize: 16,
                marginLeft: 25,
                fontStyle: 'italic',
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
            />
          </View>
          <View style={[styles.container12, {marginTop: 12}]}>
            <Text
              style={{
                fontWeight: '600',
                color: 'white',
                fontSize: 16,
                marginLeft: 25,
                fontStyle: 'italic',
                marginVertical: 12,
              }}>
              Create your list
            </Text>
            <Text
              style={{
                // fontWeight: '600',
                color: 'white',
                fontSize: 14,
                marginLeft: 25,
                marginBottom: 6,
              }}>
              Lorem ipsum dolor sit amet, conset
            </Text>
            <View style={{margin: 18}}>
              <TextInputCtrl
                IconRight={
                  <SvgXml xml={`${svgs.SvgPlus}`} width={16} height={16} />
                }
                placeholder={''}
                style={{
                  paddingRight: 60,
                  paddingLeft: 20,
                  backgroundColor: '#202844',
                  borderRadius: 20,
                  marginHorizontal: 50,
                }}
                onChangeText={(text: string) => console.log(text)}
                containerStyleIconRight={{
                  borderLeftWidth: 0.3,
                  height: 30,
                  width: 50,
                  alignSeft: 'center',
                  borderColor: 'white',
                  marginTop: 5,
                }}
              />
            </View>
            <View style={{height: 30, width: width - 40, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 10,
                  color: '#8993C9',
                  // marginTop: -8,
                  // alignSelf: 'center',
                  // marginBottom: 8,
                }}>
                2021 | SOC Mobile BKAV
              </Text>
            </View>
          </View>
          <View style={[styles.container12, {marginTop: 12}]}>
            <View
              style={{
                height: 50,
                width: width - 10,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-end',
                marginHorizontal: -15,
                marginBottom: 3,
              }}>
              <Text style={{fontSize: 12, color: '#8993C9'}}>M</Text>
              <Text style={{fontSize: 12, color: '#8993C9'}}>T</Text>
              <Text style={{fontSize: 12, color: '#8993C9'}}>W</Text>
              <Text style={{fontSize: 12, color: '#8993C9'}}>T</Text>
              <Text style={{fontSize: 12, color: '#8993C9'}}>F</Text>
              <Text style={{fontSize: 12, color: '#8993C9'}}>S</Text>
              <Text style={{fontSize: 12, color: '#8993C9'}}>S</Text>
            </View>
            <View style={{height: 180, width: width - 40}}>
              <LineChart
                data={data}
                chartConfig={chartConfig}
                height={180}
                width={width + 70}
                bezier
                withDots={true}
                withInnerLines={false}
                withOuterLines={false}
                withVerticalLabels={false}
                withHorizontalLabels={false}
                style={{
                  // position: 'absolute',
                  top: 0,
                  left: -55,
                  width: width - 40,
                  height: 200,
                }}
              />
            </View>
            <View style={{height: 20, width: width - 40, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 10,
                  color: '#8993C9',
                  marginTop: -8,
                  // alignSelf: 'center',
                  // marginBottom: 8,
                }}>
                2020 | Zulqurnain Haider
              </Text>
            </View>
          </View>
        </ScrollView>
      </ViewBackGround>
    </View>
  );
};
export default NetWorkScreen;
