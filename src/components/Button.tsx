import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import {Shadow, Neomorph} from 'react-native-neomorph-shadows';
import {svgs} from '../assets';
import {SvgXml} from 'react-native-svg';
// import { Neomorph } from 'react-native-neomorph-shadows';
import {theme} from '../theme/theme';
var width = Dimensions.get('window').width;

export function Button(props: {
  imageUrl?: string;
  title?: string;
  navigator?: any;
  navigatePath?: string;
  svgPath?: string;
}) {
  return (
    <TouchableOpacity
      style={{
        height: 95,
        alignItems: 'center',
        alignContent: 'center',
        width: 90,
      }}
      onPress={() => {
        props.navigator.navigate(props.navigatePath);
      }}>
      {/* <Image style={{ width: 60, height: 60 }}
        source={props.imageUrl}
      /> */}
      <View style={styles.Svgwrap}>
        <SvgXml xml={`${props.svgPath}`} height={16} width={16} />
      </View>
      <Text
        style={{
          color: '#fff',
          fontSize: 10,
          fontWeight: '400',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#34eb98',
    borderColor: '#34eb98',
    borderRadius: 15,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4.65,
    elevation: 9,
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    overflow: 'hidden',
    width: 120,
    height: 100,
    alignItems: 'center',
    margin: 10,
  },
  Svgwrap: {
    height: 36,
    width: 36,
    borderRadius: 18,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#57C9EF',
    alignItems: 'center',
    marginBottom: 8,
  },
});
