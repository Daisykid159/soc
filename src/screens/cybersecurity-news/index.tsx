/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {
  Dimensions,
  FlatList,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import ViewBackGround from '../../components/ViewBackGround';
import {Header} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import NewsServices from '../../core/redux/services/NewsServices';
import sharedStyles from '../../assets/css/sharedStyle';
import { PropsStyleTheme } from '../../config/theme';
const {width, height} = Dimensions.get('window');

const CybersecurityNewsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const listNews = useSelector((state: any) => state.News.news);
  const themStore:PropsStyleTheme = useSelector((state:any) => state.Settings.theme);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    NewsServices.GetAllNewsService(dispatch).finally(() => setLoading(false));
  }, []);
  const clickNews = (item: any) => {
    navigation.navigate('DetailNews', {url: item.id});
  };
  const renderNews = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={[styles.ViewChooseNoti,{backgroundColor:themStore.ColorCard}]}
        activeOpacity={0.7}
        onPress={() => clickNews(item)}>
        <View style={{width: 130, justifyContent: 'center', height: 110}}>
          <Image
            source={
              item.image
                ? {uri: item.image}
                : require('../../assets/img/imageContainer/ic_background.jpg')
            }
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
            {item.title || 'Title'}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: 'white',
              fontSize: 12,
              fontWeight: '300',
              marginTop: 12,
              lineHeight: 20,
            }}>
            {item.description || 'description'}
          </Text>
          <View style={styles.ViewDate}>
            <Text style={styles.TxtDate}>{item.time || 'No date AM'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ViewBackGround>
      <Header backBtnEnable={true} textHeader={'Tin tức an ninh'} />
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : listNews.length == 0 ? (
          <Text style={sharedStyles.noData}>No Data Collected</Text>
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{marginHorizontal: 18}}
            data={listNews}
            keyExtractor={(item, index) => `${index}`}
            renderItem={renderNews}
          />
        )}
      </View>
    </ViewBackGround>
  );
};

export default CybersecurityNewsScreen;
