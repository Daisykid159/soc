import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  Dimensions,
  View,
} from 'react-native';
import {Header} from '../../components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import AvailableCourseScreen from './available-courses';
import CourseAttendedScreen from './course-attended';
import {ViewBackGround} from '../../components';
import CourseServices from '../../core/redux/services/CourseServices';
import { useDispatch } from 'react-redux';
const initialLayout = {width: Dimensions.get('window').width};
const EducateScreen = ({route, navigation}: any) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {key: 'AvailableCourseScreen', title: 'Khóa học có sẵn'},
    {key: 'CourseAttendedScreen', title: 'Khóa học đã tham gia'},
  ]);
  const dispatch = useDispatch();
  useEffect(()=>{
    CourseServices.GetAllCourseService(dispatch);
    CourseServices.GetAllLessonService(dispatch);
  },[])
  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'AvailableCourseScreen':
        return <AvailableCourseScreen />;
        break;
      case 'CourseAttendedScreen':
        return <CourseAttendedScreen />;
        break;
      default:
        return null;
    }
  };
  const onChangetab = (index: number) => {
    setIndex(index);
    switch (index) {
      case 1:
        break;
      case 0:
        break;
    }
  };
  const renderTabBar = (props?: any) => (
    <TabBar
      {...props}
      getLabelText={({route}) => route.title}
      // inactiveColor={'black'}
      // activeColor={'white'}
      indicatorStyle={{
        // backgroundColor: 'transparent',
        borderBottomWidth: 3,
        borderColor: 'white',
        marginHorizontal: 12,
        width: initialLayout.width / 2 - 24,
      }}
      style={{backgroundColor: 'transparent'}}
      pressColor={'transparent'}
      labelStyle={{textAlign: 'center', fontSize: 14}}
    />
  );

  return (
    <ViewBackGround>
      <Header backBtnEnable={true} textHeader={'Đào tạo'} />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={onChangetab}
        initialLayout={initialLayout}
        style={styles.tabviewStyle}
      />
    </ViewBackGround>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
  tabviewStyle: {
    backgroundColor: 'transparent',
  },
});
export default EducateScreen;
