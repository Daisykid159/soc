import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const BG_COLOR_HEADER = '#083A49';

export default StyleSheet.create({
  header: {
    height:30,
    // backgroundColor:'',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtHeader: {
    fontSize: 20,
    color: '#fff',
    fontStyle:'italic',
  },
  leftH: {
    flex: 1,
  },
  buttonBack: {
    padding: 10,
  },
});
