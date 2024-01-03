// import _ from 'lodash';
import React from 'react';
import {TextInput, ViewPropTypes, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const TextInputCtrl = ({...props}: any) => {
  return (
    <View style={[styles.containerView, props.containerStyle]}>
      {props.IconLeft && (
        <View
          style={[styles.containersViewIconLeft, props.containerStyleIconLeft]}>
          {props.IconLeft}
        </View>
      )}
      <TextInput
        {...props}
        style={[styles.container, props.style]}
        placeholderTextColor={'gray'}
        placeholder={props.placeholder}
        onChangeText={(text: string) => props.onChangeText(text)}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
      />
      {props.IconRight && (
        <View
          style={[
            styles.containersViewIconRight,
            props.containerStyleIconRight,
          ]}>
          {props.IconRight}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    height: 40,
    // borderRadius: 8,
    // borderWidth: 1,
    // borderColor: 'gray',
  },
  container: {
    fontSize: 14,
    color: 'gray',
    height: 40,
    marginLeft: 6,
    marginRight: 6,
    // paddingVertical: 12,
    // paddingLeft: _mpw(12),
    // marginTop: 3,
  },
  containersViewIconRight: {
    top: 0,
    right: 0,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
    position: 'absolute',
    zIndex: 2,
  },
  containersViewIconLeft: {
    top: 0,
    left: 0,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 6,
    position: 'absolute',
    zIndex: 2,
  },
 
});

TextInputCtrl.defaultProps = {
  // style: styles.container,
};

TextInputCtrl.propTypes = {
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  IconRight: PropTypes.element,
  containerStyleIconLeft: ViewPropTypes.style,
  containerStyleIconRight: ViewPropTypes.style,
  IconLeft: PropTypes.element,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  value:PropTypes.string
};

export default TextInputCtrl;
