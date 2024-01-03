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
  container: {
    flex: 1,
    marginTop: 12,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  container1: {
    flex: 1,
    width: width - 40,
    // height: height - 150,
    backgroundColor: '#162235',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    opacity: 1,
    overflow: 'hidden',
    paddingBottom: 24,
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
  container12:{
   flex: 1,
    width: width - 40,
    // height: height - 150,
    backgroundColor: '#162235',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    opacity: 1,
    overflow: 'hidden',
    marginTop:12,
  }
});
export default styles;
