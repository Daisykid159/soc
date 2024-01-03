import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Palette} from "../../../theme/Palette";

export default StyleSheet.create({
  container: {
    height: 60,
    marginHorizontal: 17,
    marginTop: 10,
  },
  label: {
    color: Palette.black,
    fontSize: RFValue(12, 580),
  },
  labelHolder: {
    flex: 1,
    borderBottomWidth: 0.9,
    borderBottomColor: Palette.color_ccc,
  },
  groupMenu: {
    height: 35,
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 13,
  },
});
