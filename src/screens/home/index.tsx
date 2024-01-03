import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Animated, Easing, ToastAndroid, TouchableOpacity} from 'react-native';
import {
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../components';
import BannerAuto from '../../components/banner/BannerAutoPlay';
import Slide from '../../components/banner/Slide';
import {Button} from '../../components/Button';
import DatePicker from '../../components/datepicker';
import HomeSlider from '../../components/homeSliders/homeSlider';
import ViewBackGround from '../../components/ViewBackGround';
import {fcmService} from '../../config/FireBase/FCMService';
import {PropsStyleTheme} from '../../config/theme';
import HomeServices from '../../core/redux/services/HomeServices';
import settingsServices from '../../core/redux/services/settingsServices';
import data from './HomeData';
import styles from './styles';
const Image = require('../../assets/img/imageContainer/ic_background.jpg');
const {width, height} = Dimensions.get('window');
const HomeScreen = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state: any) => state.Home.banners);
  const themeStore: PropsStyleTheme = useSelector(
    (state: any) => state.Settings.theme,
  );
  const store = useSelector((state: any) => state);
  // console.log('STORE', store);
  const [refreshing, setRefreshing] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [heightSlider, setHeightSlider] = React.useState(
    () => new Animated.Value(0),
  );
  const maxHeight = heightSlider.interpolate({
    inputRange: [0, 1],
    outputRange: [170, 400], // <-- value that larger than your content's height
  });
  const ShowMore = () => {
    // Animated.timing(heightSlider, {
    //   toValue: expand ? 0 : 1,
    //   duration: 400,
    //   easing: Easing.ease,
    //   useNativeDriver: false, // <-- neccessary
    // }).start(() => setExpand(!expand));
    ToastAndroid.show('Comming soom ...', ToastAndroid.SHORT);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    CallData();
  }, []);
  const CallData = () => {
    settingsServices.ChangeLoadingApp(true,dispatch);
    Promise.all([
      HomeServices.GetNewsHightLightService(dispatch),
      HomeServices.CountDataService(dispatch),
      HomeServices.CountAllDataService(dispatch),
      fcmService.getAllNotify(dispatch),
    ]).then(res => {
      console.log('FINISH CALL');
    })
    .catch(() => {})
    .finally(() => {
      console.log('FINISH CALL');
      settingsServices.ChangeLoadingApp(false,dispatch)
    })
  };
  const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  useEffect(() => {
    CallData();
  }, []);
  const navigator = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ViewBackGround>
        <Header
          backBtnEnable={false}
          textHeader={'eEyes Security'}
          buttonRight={<DatePicker onSync={CallData} />}
        />
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          nestedScrollEnabled={true}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontWeight: '600',
                  color: 'white',
                  fontSize: 16,
                  marginHorizontal: 5,
                  fontStyle: 'italic',
                }}>
                Nổi bật
              </Text>
            </View>
            {banners.length > 0 ? (
              <BannerAuto
                autoplay={true}
                autoplayTimeout={3000}
                pageSize={width}
                loop
                index={0}>
                {banners.map((item: any, index: any) => Slide(item))}
              </BannerAuto>
            ) : (
              <View
                style={{
                  ...styles.ContainerNothingNews,
                  backgroundColor: themeStore.ColorCard,
                }}>
                <Text style={styles.textNoNews}>Nothing news display</Text>
              </View>
            )}
          </View>

          <Animated.View
            style={{
              ...styles.container1,
              backgroundColor: themeStore.ColorCard,
              height: maxHeight,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 12,
              }}>
              <Text style={styles.titleLeft}>Thống kê</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() => ShowMore()}>
                <Text
                  style={{
                    fontWeight: '400',
                    color: 'green',
                    fontSize: 14,
                    marginRight: 12,
                    marginTop: 12,
                  }}>
                  Xem tất cả
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
              <HomeSlider />
            </View>
          </Animated.View>
          <View style={{...styles.card,   backgroundColor: themeStore.ColorCard}}>
            <View style={styles.bound}>
              <Text
                style={{
                  ...styles.titleLeft,
                  marginBottom: 12,
                }}>
                Chức năng
              </Text>
            </View>
            <View>
              <FlatList
                data={data.data}
                numColumns={4}
                scrollEnabled
                keyExtractor={(item, index) => `${index}`}
                contentContainerStyle={{
                  flexGrow: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 360,
                  marginHorizontal: (width - 360) / 2 - 5,
                }}
                columnWrapperStyle={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
                renderItem={({item}) => (
                  <Button
                    title={item.title}
                    // imageUrl={item.imageUrl}
                    navigator={navigator}
                    navigatePath={item.path}
                    // svgPath ={item.svgPath}
                    svgPath={`${item.svgPath}`}
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </ViewBackGround>
    </View>
  );
};
export default HomeScreen;
