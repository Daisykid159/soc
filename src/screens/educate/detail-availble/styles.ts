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
    // flex:1,
    backgroundColor: '#E4EDF9',
    height: height,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  TxtTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  ViewEducate: {
    width: width ,
    height:'15%',
    overflow: 'hidden',
    marginVertical: 6,
    flexDirection: 'row',
  },
  ViewDate: {
    position: 'absolute',
    bottom: 3,
    left: 0,
  },
  TxtDate: {
    fontSize: 12,
    color: '#000000',
  },
  TxtDes: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 12,
    lineHeight: 20,
  },
  ListViewWork:{
    borderRadius:10, backgroundColor:"#f1f1f1",
    height:'40%'
  },
   ViewTitle1: {
    marginVertical: 12,
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#202844',
    borderRadius: 20,
  },
  TxtTitle1: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    lineHeight: 20,
  },
    ViewDes: {
    flexDirection: 'row',
    marginVertical: 6,
    borderBottomWidth:1,
    paddingBottom:5
  },
  Touchable:{
                      backgroundColor: '#57C9EF',
                  justifyContent: 'center',
                  paddingHorizontal: 16,
                  height: 50,
                  marginBottom: 0,
                  width: width - 20 - 12,
                  marginVertical: 12,
                  marginLeft: 0,
                  alignItems:'center', borderRadius: 10,
                
  }
});
export default styles;
