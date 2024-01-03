import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../theme/theme';

type Props = {
  children: React.ReactNode;
};

const Header = ({children}: Props) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: '#C4D0F3',
    fontWeight: '800',
    paddingVertical: 14,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default memo(Header);
