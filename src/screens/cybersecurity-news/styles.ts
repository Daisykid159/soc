// const bg = require('../../../assets/image/bg_home.jpg');
const { width, height } = Dimensions.get('window');
import {
  Dimensions, StyleSheet
} from 'react-native';
import { generalStyles } from '../../general/styles';
 const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 12,
        backgroundColor:'transparent',
    },
   ViewChooseNoti: {
        width: width - 36,
        minHeight: 120,
        marginVertical:6,
        flexDirection:'row',
       ...generalStyles.card
  },
  ViewDot:{
    height: 10, width:10, position:'absolute',
    right: 12, top:18,backgroundColor:'red', borderRadius:10
  },
  ViewDate:{
    position:'absolute',
    bottom: 3, left: 0,
  },
  TxtDate:{
    fontSize:12, color:'#FFFFFF'
  }
  
})
export default styles;