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
import { generalStyles } from '../../general/styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  container1: {
    flex: 1,
    width: width - 20,
    // height: height - 150,
    ...generalStyles.card
  },
  ViewTitle1: {
    margin: 12,
    flexDirection: 'row',
    height: 35,
    // justifyContent: 'center',
    alignItems: 'center',
    width: width - 20 - 24,
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
  container2:{
   flex: 1,
    width: width - 20,
    // height: height - 150,
    marginTop:18,
    ...generalStyles.card
  }
});
export default styles;
