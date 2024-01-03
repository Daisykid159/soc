import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#000',
    marginRight:12,
  },
  header: {
    fontSize: 32,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 50,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width:width - 120
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    marginLeft: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
    marginBottom: 15,

  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginLeft: 12,
    marginVertical: 40,
    height: 50
  },
  text: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
    marginTop: 5,
    marginRight:12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export default styles;