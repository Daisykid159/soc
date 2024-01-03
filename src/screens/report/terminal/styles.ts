// const bg = require('../../../assets/image/bg_home.jpg');
const {width, height} = Dimensions.get('window');
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
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    width:width,
    
  },
  container1: {
    flex: 1,
    width:'100%',
    paddingBottom: 24,
    ...generalStyles.card
   
  },
  ViewTitle1: {
    margin: 10,
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#202844',
    borderRadius: 20,
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
    height: 120,
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
  container2:{
   flex: 1,
   width:'100%',
    // height: height - 150,
    marginTop:12,
    ...generalStyles.card
  }
});
export default styles;
