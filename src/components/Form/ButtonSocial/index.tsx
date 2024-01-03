import React, {ReactElement} from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface Props {
  title: string;
  color: (string | number)[];
  image: ImageSourcePropType;
  action?: ((event: GestureResponderEvent) => void) | undefined;
}

const ButtonSocial = (props: Props): ReactElement => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.action}>
      <LinearGradient
        colors={props.color}
        start={{x: 1.0, y: 0.5}}
        end={{x: 0.0, y: 0.5}}
        locations={[0.0, 1.0]}
        style={styles.gradient}>
        <Image style={styles.icon} source={props.image} />
        <Text style={styles.btnText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default ButtonSocial;
