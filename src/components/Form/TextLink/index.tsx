import React, {ReactElement} from 'react';
import {
    GestureResponderEvent,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from './styles';

interface Props {
    textTitle: string;
    textLink: string;
    fontSize: number;
    color: string;
    action?: ((event: GestureResponderEvent) => void) | undefined;
}

const TextLink = (props: Props): ReactElement => {
    return (
        <View style={styles.groupTextSignIn}>
            <Text style={[styles.textSignIn, {fontSize: props.fontSize}]}>
                {props.textTitle}
            </Text>
            <TouchableOpacity onPress={props.action}>
                <Text
                    style={[
                        styles.textSignIn,
                        styles.marginLeft5,
                        {fontSize: props.fontSize, color: props.color},
                    ]}>
                    {props.textLink}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default TextLink;
