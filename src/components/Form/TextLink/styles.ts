import {Palette} from '../../../theme/Palette';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  groupTextSignIn: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  textSignIn: {
    fontSize: RFValue(12, 580),
    color: Palette.color_1f1,
  },
  marginLeft5: {
    marginLeft: 5,
  },
  textLink: {
    color: Palette.color_e40,
  },
});
