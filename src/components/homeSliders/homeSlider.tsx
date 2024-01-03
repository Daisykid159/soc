import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { useSelector } from 'react-redux';
import { PropsStyleTheme } from '../../config/theme';
import { generalStyles } from '../../general/styles';
const fackeSliderInfo = [
  {
    key: 1,
    title: 'Tấn công APT',
    task: '30',
    image: `https://assets.website-files.com/5f204aba8e0f187e7fb85a87/5f210a533185e7434d9efcab_hero%20img.jpg`,
    des: 'người dùng',
  },
  {
    key: 2,
    title: 'Nhiễm mã độc',
    task: '5',
    image: `https://assets.website-files.com/5f204aba8e0f187e7fb85a87/5f210a533185e7434d9efcab_hero%20img.jpg`,
    des: 'người dùng',
  },
  {
    key: 3,
    title: 'Vi phạm chính sách',
    task: '11',
    image: `https://assets.website-files.com/5f204aba8e0f187e7fb85a87/5f210a533185e7434d9efcab_hero%20img.jpg`,
    des: 'người dùng',
  },
  {
    key: 4,
    title: 'App Design',
    task: '22',
    image: `https://assets.website-files.com/5f204aba8e0f187e7fb85a87/5f210a533185e7434d9efcab_hero%20img.jpg`,
    des: 'người dùng',
  },
];
const {width, height} = Dimensions.get('window');

export default function HomeSlider() {
  const countData = useSelector((state:any) => state.Home.countHome);
  
  if(countData.length == 0) return <Text style={{color:'white'}}>Nothing data</Text> 
  return (
    <FlatList
      style={styles.container}
      data={countData ||fackeSliderInfo}
      extraData={fackeSliderInfo}
      keyExtractor={(item, index) => 'key' + index}
      horizontal
      scrollEnabled={true}
      snapToAlignment="center"
      scrollEventThrottle={16}
      decelerationRate={'normal'}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <Slide
            image={item.image}
            title={item.title}
            task={item.task}
            des={item.des}
            navigate={item.navigate}
          />
        );
      }}
    />
  );
}

function Slide(item: {
  des?: string;
  image?: string;
  title?: string;
  task?: string;
  description?: string;
  type?: string;
  id?: string;
  navigate?:any;
}) {
  const navigate = useNavigation();
  const themeStore:PropsStyleTheme = useSelector((state:any)=>state.Settings.theme);
  const handleGo = (nav:any)=>{
    if(nav){
      navigate.navigate(nav);
    }
  }
  return (
    <TouchableOpacity
      activeOpacity={.7}
      onPress={()=>handleGo(item.navigate)}
    >
           <ImageBackground source={themeStore.BackGroundImage} style={styles.cardView}>
            <View style={styles.content}>
              <View>
                <Text style={styles.textheader}>{item.title?.toLocaleUpperCase() || 'Nothing'}</Text>
              </View>
            </View>
            <View style={styles.ViewNumber}>
              <Text style={styles.textdescription} numberOfLines={1}>
                {item.task || 'Nothing'}{' '}
              </Text>
              <Text style={[styles.unit]}>
                  {' '}
                  {item.des || 'Nothing'}
                </Text>
            </View>
          </ImageBackground>
    </TouchableOpacity>
   
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
  cardView: {
    flex: 1,
    width: width / 3 - 18,
    height: 170 - 40-20,
    margin: 5,
    backgroundColor:'rgba(0,0,0,0.9)',
    ...generalStyles.card,
  },
  title: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    backgroundColor: 'red',
  },
  ViewNumber: {
    position: 'absolute',
    bottom: 0,
    right: 12,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    opacity: 0.1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  content: {
    // height: '100%',
    width: '80%',
    // alignSelf: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    zIndex: 2,
    top: 10,
    left: 10,
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
    zIndex: 1,
  },
  wall: {
    position:'absolute',
    opacity:.1,
    backgroundColor:'red',
    top:'100%',
    height:'100%'

  },
  textheader: {
    fontSize: 16,
    marginLeft: 5,
    marginTop: 3,
    color: 'white',
    fontWeight:'600'
    // bottom: 0,
  },
  textdescription: {
    fontSize: 25,
    color: 'red',
    alignSelf: 'center',
    fontWeight:'800',
  },
  unit:{
    fontSize: 14,
    marginLeft: 5,
    bottom:5,
    color: 'white',
    fontWeight:'600',
    fontStyle:'italic'
  }
});
