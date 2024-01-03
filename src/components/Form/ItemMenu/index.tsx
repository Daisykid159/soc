import React, {ReactElement} from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

interface Props {
  label: string;
  image: ImageSourcePropType;
  action?: (event: GestureResponderEvent) => void;
}

const ItemMenu = (props: Props): ReactElement => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.action}>
      <View style={styles.groupMenu}>
        <Image style={styles.icon} source={props.image} />
        <View style={styles.labelHolder}>
          <Text style={styles.label}>{props.label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ItemMenu;
