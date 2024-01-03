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
    height: height - 150,
    ...generalStyles.card
  },
  wrapChoose: {},
  TouchableChoose: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  TxtTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    lineHeight: 20,
  },
  TxtDes: {
    fontSize: 12,
    fontWeight: '300',
    color: 'white',
    lineHeight: 20,
    marginTop: 6,
  },
});
export default styles;
