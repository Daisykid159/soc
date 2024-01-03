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
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  Dimensions,
  FlatList,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import ViewBackGround from '../../../components/ViewBackGround';
import {Header} from '../../../components';
import { useSelector } from 'react-redux';
const {width, height} = Dimensions.get('window');
import VideoPlayer from '../../../components/Player';
const DetailAttendedScreen = ({route,navigation}) => {
  const navigator = useNavigation();
  const {IdCourse} = route.params;
  const course = useSelector((state:any)=> state.Course.courses).find((item:any)=> item.Id==IdCourse);
  const listLesson = useSelector((state:any)=> state.Course.lessons);
  const listShow = listLesson.filter((item:any) => item.IdCourse == IdCourse);
  const [indexp,setIndex] = useState(0);
  return (
    <View style={{flex: 1}}>
      <ViewBackGround>
        <Header backBtnEnable={true} textHeader={'Chi tiết khóa học'} />
        <View style={{height: '38%', width: width}}>
         {listShow.length>0 && <VideoPlayer video={listShow[indexp].video}/>}
        </View>
        <View style={styles.ViewContainer}>
          <Text style={styles.TxtTitle}>{course.courseName}</Text>
          {listShow.length==0
          ?<Text>Nothing Lession</Text>
          :<View style={styles.ViewFatlist}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={listShow}
              scrollEnabled
              keyExtractor={(item, i) => `${i}`}
              renderItem={({item,index}) => (
                <TouchableOpacity onPress={()=>setIndex(index)} style={{...styles.ViewEducate,backgroundColor:index==indexp?'#ccc':'transparent'}} 
                activeOpacity={.7}
                >
                  <View
                    style={{width: '40%', justifyContent: 'center', height: 110}}>
                          <Image
                          source={course.image?{uri:course.image}:require('../../../assets/img/imageContainer/ic_background.jpg')}
                          style={{
                            height: 90,
                            width: '100%',
                            alignSelf: 'center',
                            borderRadius: 10,
                          }}
                        />
                  </View>
                  <View
                    style={{
                      height: 110,
                      width: width - 180,
                      paddingHorizontal: 10,
                    }}>
                    <Text numberOfLines={2} style={styles.TxtDes}>
                      Bài:<Text style={styles.TxtDes}>  {item.lessonName}</Text>
                    </Text>
                    <Text numberOfLines={2} style={styles.TxtDes}>
                     {item.description}
                    </Text>
                    <Text numberOfLines={2} style={styles.TxtDes}>
                      Thời gian : <Text style={styles.TxtDes}>{item.longtime}</Text>
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          }
        </View>
      </ViewBackGround>
    </View>
  );
};
var stylesV = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default DetailAttendedScreen;
