
const { width, height } = Dimensions.get('window');
import {
    Dimensions, FlatList,
    ImageBackground, StyleSheet, View, ScrollView, RefreshControl
} from 'react-native';
const styles = StyleSheet.create({
    container: { flex: 1 },
    activityIndicatorStyle: {
        flex: 1,
        backgroundColor: '#000',
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    },
});
export default styles;