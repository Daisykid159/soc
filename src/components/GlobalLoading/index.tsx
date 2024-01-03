import React, { ReactElement } from 'react';
import {ActivityIndicator, Dimensions, } from 'react-native';
//import Modal from 'react-native-modal';
import Modal from 'react-native-modal'
import { useSelector } from 'react-redux';
import { selectGlobalLoading } from '../../selector/GlobalSelector';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const GlobalLoading = (): ReactElement => {
  const isLoading = useSelector(selectGlobalLoading);
  return (
    <Modal isVisible={isLoading} deviceHeight={deviceHeight} deviceWidth={deviceWidth}>
      <ActivityIndicator animating={true} size="large" color="#17a2b8" />
    </Modal>
  );
};
export default GlobalLoading;
