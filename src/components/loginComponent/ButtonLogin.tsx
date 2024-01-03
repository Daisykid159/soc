import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {theme} from '../../theme/theme';

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({mode, style, children, ...props}: Props) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && {backgroundColor: theme.colors.surface},
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}>
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#C4D0F3',
    height: 40,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: '600',
    lineHeight: 23,
    color: '#000000',
    alignSelf: 'center',
  },
});

export default memo(Button);
