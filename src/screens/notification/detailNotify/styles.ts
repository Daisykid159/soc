// const bg = require('../../../assets/image/bg_home.jpg');
const {width, height} = Dimensions.get('screen');
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { generalStyles } from '../../../general/styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    alignItems: 'center',

    // backgroundColor: '#162235',
    // borderRadius:10,
    // borderColor: 'rgba(0, 111, 226, 0.39)',
    // borderWidth:2
    ...generalStyles.card
  },
  ViewTitle1: {
    marginTop:10,
    flexDirection: 'row',
    height: 35,
    width: '95%',
    backgroundColor: '#202844',
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  TxtTitle1: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    lineHeight: 20,
  },
  ViewWrapDes: {
    // flexDirection:'row',
    marginHorizontal: 12,
    height: 100,
  },
  ViewDes: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  TxtDes: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    lineHeight: 20,
  },
  sheet:{
     width: '100%',
     bottom:-72,
     backgroundColor:'#202844',
     position:'absolute',
     left:0,
     borderTopRightRadius:10,
     borderTopLeftRadius:10,
     paddingHorizontal:20,

  },
  mask:{
    backgroundColor: 'rgba(0,0,0,1)',
    position:'absolute',
    top:0,
    left:0,
    width:width,
    height:height
  },
  grabber:{
    width:60,
    borderTopWidth:3,
    borderRadius:10,
    borderTopColor:'#ccc',
    marginTop:10,
   alignSelf:'center'
  },
  row:{
    width:'100%',
    marginVertical:7,
    borderBottomColor:'red',
    borderBottomWidth:1,
    paddingBottom:5
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  },
  text:{
    fontSize:15,
    fontStyle:'italic',
    width:'100%',
    textAlign:'left',
    color:'white'
  }
});
export default styles;
