import { StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({
    card:{
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 1,
        // shadowRadius: 3,
        opacity: 1,
        overflow: 'hidden',
        borderColor: 'rgba(0, 111, 226, 0.39)',
        borderWidth: 2,
    },
    titleLeft:{
        fontWeight: '600',
        color: 'white',
        fontSize: 16,
        marginLeft: 25,
        fontStyle: 'italic',
        marginTop: 12,
      }
})