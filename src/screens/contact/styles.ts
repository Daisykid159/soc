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
        minHeight: 130,
        marginVertical:6,
        flexDirection:'row',
        padding:10,
        ...generalStyles.card
  },
  ViewDot:{
    height: 10, width:10, position:'absolute',
    right: 12, top:18,backgroundColor:'red', borderRadius:10
  },
  TxtDate:{
    fontSize:12, color:'#FFFFFF'
  },
  text:{
      color: 'white',
      fontSize: 15,
      fontWeight: '500',
      marginTop: 12,
      lineHeight: 20,
  }
})
export default styles;