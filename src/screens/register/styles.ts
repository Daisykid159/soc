import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';
// import colors from '../../../assets/theme/colors';
import { theme } from '../../theme/theme';
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 12,
    marginTop: 24
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    // color: theme.colors.secondary,
    color:'#C4D0F3',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
   
  },
  TxtEmail:{
    color:"#C4D0F3",
    fontSize:20,
    fontWeight:"600", marginBottom:6
  },
  ViewWrapLogo:{
        width: width,
          height: 200,
          justifyContent: 'flex-end',
          alignItems: 'center',
  },
  ViewTextInput:{
     paddingHorizontal: 12,
              backgroundColor: '#202844',
              borderRadius: 10,
              marginHorizontal: 40,
              height: 50,
  },
    button: {
    marginTop: 24,
  },
    ViewSetting:{
position:'absolute',
top:20, right:20,
  }
});
