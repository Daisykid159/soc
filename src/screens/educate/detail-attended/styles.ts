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
const styles = StyleSheet.create({
  ViewContainer: {
    backgroundColor: '#E4EDF0',
    flex:1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 12,
  },
  TxtTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal:10,
  },
  ViewEducate: {
    width: width,
    minHeight: 120,
    overflow: 'hidden',
    marginVertical: 6,
    flexDirection: 'row',
  },
  ViewDate: {
    position: 'absolute',
    bottom: 3,
    left: 0,
  },

  TxtDes: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 12,
    lineHeight: 20,
  },
  ViewFatlist:{
    paddingHorizontal:10,
    width:width,
    flex:1,
  }
});
export default styles;
