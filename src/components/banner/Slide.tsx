import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
const ImageData: any = require('../../assets/img/imageContainer/ic_background.jpg');
const {width, height} = Dimensions.get('window');

export default function Slide(item: {
  image?: string;
  title?: string;
  description?: string;
  type?: string;
  id?: string;
}) {
  return (
    <View style={styles.cardView} key={item.id}>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title || 'Nothing'}
        </Text>
        <Text style={styles.textdescription} numberOfLines={1}>
          {item.description || 'July 2021'}
        </Text>
      </View>
      <View style={styles.wall}>
        {/* <Image style={styles.image} source={{ uri: item.image }} /> */}
        <Image
          source={item.image ? {uri: item.image} : ImageData}
          style={styles.imageData}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    width: '100%',
    height: height / 3.5,
    backgroundColor: 'transparent',
    opacity: 1,
    marginBottom:10,
    shadowRadius: 3,
    elevation: 5,
    overflow: 'hidden',
  },
  content: {
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: 20,
    left: 20,
  },

  imageData: {
    width:'100%',
    height: height / 3,
    zIndex: 1,
  },
  wall: {
    opacity: 0.7,
  },
  textheader: {
    fontSize: 14,
    color: 'white',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  textdescription: {
    fontSize: 12,
    color: '#ccc',
    fontStyle: 'italic',
  },
});
