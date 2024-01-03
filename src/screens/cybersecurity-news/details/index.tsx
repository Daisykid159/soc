import { HeaderBackButton } from "@react-navigation/stack";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, Button, Linking, StyleSheet, View, ActivityIndicator, Platform, TouchableOpacity, Text } from "react-native";
import WebView from "react-native-webview";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header, ViewBackGround } from "../../../components";

import styles from './style';
const DetailNews = ({ route, navigation, setGoBack }) => {
    const ref = useRef(null);
    const { url } = route.params;
    const [visible, setVisible] = useState(true)
    const [canBack, setCanBack] = useState(false); //
    const ActivityIndicatorElement = () => {
        return (
            <ActivityIndicator
                color="#fff"
                size="large"
                style={styles.activityIndicatorStyle}
            />
        );
    };
    return (
        <View style={{ flex: 1 }}>
            {visible ? <ActivityIndicatorElement /> : null}
            <ViewBackGround>
                <Header backBtnEnable={true} textHeader={'Chi tiết tin tức'} />
                <WebView
                    ref={ref}
                    onNavigationStateChange={(navState) => {
                        if (navState.canGoBack) {
                            setCanBack(true)
                        } else {
                            setCanBack(false)
                        }
                    }}
                    source={{
                        uri: `${url}`,
                    }}
                    style={{ padding: 5 }}
                    incognito={false}
                    allowsLinkPreview={true}
                    bounces={true}
                    sharedCookiesEnabled={true}
                    thirdPartyCookiesEnabled={true}
                    renderLoading={() => {
                        return (
                            <ActivityIndicatorElement />
                        );
                    }}
                    startInLoadingState={true}
                    allowsBackForwardNavigationGestures
                />
            </ViewBackGround>
        </View>
    );
};
export default DetailNews;
