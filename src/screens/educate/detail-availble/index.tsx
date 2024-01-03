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
  FlatList, Image, Text, TouchableOpacity, View
} from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from '../../../components';
import ViewBackGround from '../../../components/ViewBackGround';
import styles from './styles';
const {width, height} = Dimensions.get('window');

const DetailAvailableScreen = ({route,navigation}) => {
  const navigator = useNavigation();
  const {IdCourse} = route.params;
  const course = useSelector((state:any)=> state.Course.courses).find((item:any)=> item.Id==IdCourse);
  const listLesson = useSelector((state:any)=> state.Course.lessons);
  console.log('course',course);
  const listShow = listLesson.filter((item:any) => item.IdCourse == IdCourse);
  var totalTime = 0;
  listShow.forEach((element:any) => {
    totalTime+=element.longtime
  });
  return (
    <View style={{flex: 1}}>
      <ViewBackGround>
        <Header backBtnEnable={true} textHeader={'Chi tiết khóa học'} />
        <View style={{height: 130, width: width}}></View>
        <View style={styles.ViewContainer}>
          <Text style={styles.TxtTitle}>{course.courseName}</Text>
          <View style={{...styles.ViewEducate}}>
            <View style={{width: 180, justifyContent: 'center', height: 110}}>
              <Image
                source={course.image?{uri:course.image}:require('../../../assets/img/imageContainer/ic_background.jpg')}
                style={{
                  height: 90,
                  width: 180,
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
              />
            </View>
            <View
              style={{height: 110, width: width - 180, paddingHorizontal: 10}}>
              <Text numberOfLines={2} style={styles.TxtDes}>
                Số lượng bài học : <Text style={styles.TxtDes}>{listShow.length} bài</Text>
              </Text>
              <Text numberOfLines={2} style={styles.TxtDes}>
                Nguồn cung cấp : <Text style={styles.TxtDes}>BKAV</Text>
              </Text>
              <Text numberOfLines={2} style={styles.TxtDes}>
                Tổng thời gian : <Text style={styles.TxtDes}>{totalTime} phút</Text>
              </Text>
            </View>
          </View>
          <Text style={styles.TxtTitle}>Danh sách bài học</Text>
          <View style={styles.ListViewWork}>
            <View style={styles.ViewTitle1}>
              <View
                style={{
                  width: '30%',
                  justifyContent: 'center',
                  paddingLeft: 18,
                }}>
                <Text style={styles.TxtTitle1}>Bài học</Text>
              </View>
              <View
                style={{
                  width: '40%',
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <Text style={styles.TxtTitle1}>Nội dung</Text>
              </View>
              <View
                style={{
                  width: '30%',
                  justifyContent: 'center',
                  paddingLeft: 12,
                }}>
                <Text style={styles.TxtTitle1}>Thời gian</Text>
              </View>
            </View>
            <View style={{marginHorizontal: 12, height: '55%'}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={listShow}
                scrollEnabled
                keyExtractor={(item, index) => `${index}`}
                renderItem={({item}) => (
                  <View style={styles.ViewDes}>
                    <View
                      style={{
                        width: '25%',
                        justifyContent: 'center',
                        paddingLeft: 18,
                      }}>
                      <Text style={styles.TxtDes} numberOfLines={2}>
                        {item.Id}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '50%',
                        justifyContent: 'center',
                        paddingLeft: 12,
                      }}>
                      <Text style={styles.TxtDes} numberOfLines={2}>
                        {item.lessonName}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '25%',
                        justifyContent: 'center',
                        paddingLeft: 12,
                      }}>
                      <Text numberOfLines={2} style={styles.TxtDes}>
                        {item.longtime} phút
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
            <TouchableOpacity
            activeOpacity={.6}
              style={[
                // styles.ViewTitle1,
                styles.Touchable,
              ]}>
              <Text style={[styles.TxtTitle1, {fontSize: 18}]}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ViewBackGround>
    </View>
  );
};

export default DetailAvailableScreen;
