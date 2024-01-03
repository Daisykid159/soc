// const bg = require('../../../assets/image/bg_home.jpg');
const {width, height} = Dimensions.get('window');
import {
  Dimensions, StyleSheet
} from 'react-native';
import { generalStyles } from '../../general/styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
  },
  bound: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  container1: {
    height: 170,
    width: width - 10,
    ...generalStyles.card
  },
  ContainerNothingNews: {
    width: '100%',
    height: height / 3.7,
    marginBottom: 10,
    justifyContent:'center',
    ...generalStyles.card
   
  },
  textNoNews:{
    color:'#fff',
    textAlign:'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    opacity: 0.1,
  },
  card: {
    width: width - 10,
    marginTop: 12,
    ...generalStyles.card
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    zIndex: 2,
    opacity: 0.8,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  titleLeft:{
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
    marginLeft: 7,
    fontStyle: 'italic',
    marginTop: 12,
  }
});
export default styles;
