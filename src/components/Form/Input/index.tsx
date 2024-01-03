import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

interface Props {
    label: string;
    image?: ImageSourcePropType | undefined;
    placeHolder?: string;
    placeHolderColor: string;
    isPassword?: boolean;
    isRequired?: boolean;
    editable?: boolean;
    value?: any;
    maxLength?: number;
    keyboardNumber?: boolean;
    marginHori?: number;
    removeValidateText?: Dispatch<SetStateAction<string>>;
    setValue?: Dispatch<SetStateAction<string>>;
}

const Input = (props: Props): ReactElement => {
    return (
        <View
            style={[
                styles.container,
                {marginHorizontal: props.marginHori ? props.marginHori : 20},
            ]}>
            <Text style={styles.label}>
                {props.label}
                {props.isRequired ? <Text style={styles.required}>{' *'}</Text> : null}
            </Text>
            <View style={styles.groupIconInput}>
                {props.image ? (
                    <Image style={styles.icon} source={props.image} />
                ) : null}
                {props.editable === false ? (
                    <Text style={styles.input}>{props.value}</Text>
                ) : (
                    <TextInput
                        style={styles.input}
                        placeholder={props.placeHolder}
                        placeholderTextColor={props.placeHolderColor}
                        secureTextEntry={props.isPassword ? true : false}
                        value={props.value}
                        maxLength={props.maxLength}
                        keyboardType={props.keyboardNumber ? 'numeric' : 'default'}
                        onFocus={() =>
                            props.removeValidateText ? props.removeValidateText('') : null
                        }
                        onChangeText={text =>
                            props.setValue ? props.setValue(text) : null
                        }
                    />
                )}
            </View>
        </View>
    );
};
export default Input;
