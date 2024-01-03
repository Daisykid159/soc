import {useNavigation} from '@react-navigation/native'; // not sure package name
import React from 'react';

export const withNavigation = (Component:any) => {
  return (props:any) => {
    const navigation = useNavigation();

    return <Component navigation={navigation} {...props} />;
  };
};
