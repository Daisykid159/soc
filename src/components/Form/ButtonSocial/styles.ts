import {Palette} from '../../../theme/Palette';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 100,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: RFValue(12, 580),
    fontWeight: '500',
    color: Palette.white,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 5,
  },
});
