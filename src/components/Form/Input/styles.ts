
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Palette} from "../../../theme/Palette";

export default StyleSheet.create({
  container: {
    height: 60,
    marginHorizontal: 20,
    marginTop: 25,
  },
  label: {
    color: Palette.color_545,
    fontSize: RFValue(10, 580),
  },
  groupIconInput: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: Palette.color_ccc,
  },
  icon: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 13,
  },
  input: {
    flex: 1,
    alignSelf: 'center',
  },
  required: {
    fontWeight: '600',
    fontSize: RFValue(12, 580),
    color: Palette.color_ff3,
  },
});
