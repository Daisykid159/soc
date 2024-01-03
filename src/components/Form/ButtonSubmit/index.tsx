
import React, {ReactElement} from 'react';
import {
    GestureResponderEvent,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Palette} from "../../../theme/Palette";


interface Props {
    title: string;
    color: (string | number)[];
    isProductItem?: boolean;
    isSmall?: boolean;
    labelColor?: string;
    border?: boolean;
    borderColor?: string;
    action?: ((event: GestureResponderEvent) => void) | undefined;
}

const ButtonSubmit = (props: Props): ReactElement => {
    return (
        <TouchableOpacity
            style={props.isSmall ? styles.containerSmall : styles.container}
            onPress={props.action}>
            {props.border ? (
                <View
                    style={[
                        styles.gradient,
                        {
                            borderWidth: 0.5,
                            borderColor: props.borderColor
                                ? props.borderColor
                                : Palette.color_ccc,
                        },
                    ]}>
                    {props.isSmall ? (
                        <Text
                            style={[
                                styles.smallText,
                                {color: props.labelColor ? props.labelColor : Palette.black},
                            ]}>
                            {props.title}
                        </Text>
                    ) : (
                        <Text style={props.isProductItem ? styles.btnItem : styles.btnText}>
                            {props.title}
                        </Text>
                    )}
                </View>
            ) : (
                <LinearGradient
                    colors={props.color}
                    start={{x: 1.0, y: 0.5}}
                    end={{x: 0.0, y: 0.5}}
                    locations={[0.0, 1.0]}
                    style={styles.gradient}>
                    {props.isSmall ? (
                        <Text style={styles.smallText}>{props.title}</Text>
                    ) : (
                        <Text style={props.isProductItem ? styles.btnItem : styles.btnText}>
                            {props.title}
                        </Text>
                    )}
                </LinearGradient>
            )}
        </TouchableOpacity>
    );
};
export default ButtonSubmit;
