import {Palette} from '../../../theme/Palette';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  containerSmall: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  gradient: {
    flex: 1,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  btnText: {
    fontSize: RFValue(14, 580),
    fontWeight: '500',
    color: Palette.white,
  },
  btnItem: {
    fontSize: RFValue(11, 580),
    fontWeight: '600',
    color: Palette.white,
  },
  smallText: {
    fontSize: RFValue(12, 580),
    fontWeight: '600',
    color: Palette.white,
  },
});
