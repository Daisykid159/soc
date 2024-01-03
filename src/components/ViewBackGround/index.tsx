import PropTypes from 'prop-types';
import React, {memo, ReactElement} from 'react';
import {
  StyleSheet,
  ViewPropTypes,
  StatusBar,
  ImageBackground,
  Dimensions,
  View,
  Platform,
} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import { useSelector } from 'react-redux';
import Constant from '../../config/Constant';
import { PropsStyleTheme } from '../../config/theme';
const statusBarHieght = StatusBar.currentHeight;
const {height, width} = Dimensions.get('screen');

const ViewBackGround = ({children, props}: any) => {
  const ThemeStore:PropsStyleTheme = useSelector((state:any)=> state.Settings.theme)
  return (
    <ImageBackground
      source={ThemeStore.BackGroundImage}
      style={{width: width, height: '100%'}}>
      <StatusBar
        translucent={true}
        backgroundColor={'rgba(0, 0, 0, 0)'}
        barStyle={ThemeStore.StatusBarMode || 'dark-content'}
      />
      <View {...props} style={[styles.container]}>
        {children}
      </View>
    </ImageBackground>
  );
};

// ViewBackGround.defaultProps = {
// };

// ViewBackGround.propTypes = {
// containerStyle:ViewPropTypes.style,
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() : statusBarHieght,
   // marginBottom: Platform.OS === 'ios' ? getBottomSpace() : 0,
   marginBottom:Constant.VAR.HEIGHT_BOTTOM_TAB
    //height: height,
  },
});
export default ViewBackGround;
