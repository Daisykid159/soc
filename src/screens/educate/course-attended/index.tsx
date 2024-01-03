
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList, Image, Text, TouchableOpacity, View
} from 'react-native';
import { useSelector } from 'react-redux';
import { PropsStyleTheme } from '../../../config/theme';
import styles from './styles';
const {width, height} = Dimensions.get('window');

const CourseAttendedScreen = () => {
  const navigation = useNavigation();
  const data1 = [1, 2, 3, 2, 4, 6];
  const listCourse = useSelector((state:any)=>state.Course.courses);
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);

  const renderItem= ({item, index}: any) => {
    return (
      <TouchableOpacity
      activeOpacity={.7}
        onPress={() => {
          navigation.navigate('DetailAttendedScreen',{IdCourse:item.Id});
        }}
        style={[styles.ViewChooseNoti,{backgroundColor:themStore.ColorCard}]}>
        <View style={{width: 130, justifyContent: 'center', height: 110}}>
          <Image
            source={item.image?{uri:item.image}:require('../../../assets/img/imageContainer/ic_background.jpg')}
            style={{
              height: 90,
              width: 100,
              alignSelf: 'center',
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{height: 110, width: width - 130 - 36, paddingRight: 10}}>
          <Text
            numberOfLines={2}
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: '500',
              marginTop: 12,
              lineHeight: 20,
            }}>
            {item.courseName}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: 'white',
              fontSize: 12,
              fontWeight: '300',
              marginTop: 12,
              lineHeight: 20,
            }}>
              {item.description}
          </Text>
          <View style={styles.ViewDate}>
            <Text style={styles.TxtDate}>{`${new Date(item.time).toLocaleDateString()} - ${new Date(item.time).toLocaleTimeString()}`}</Text>
          </View>
          {/* <View style={styles.ViewDot}></View> */}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal: 18}}
          data={listCourse}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default CourseAttendedScreen;
