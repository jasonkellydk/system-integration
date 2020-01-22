import React from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
} from 'react-native';

import {useRef, useState} from 'react';

import WebView from "react-native-webview";

const authUrl = 'http://80.210.70.4:3333/easyid-form.php';

const LoginForm = ({ onSuccess }) => {
  const webview = useRef(undefined);

  const setPostMessageForToken = `
    (function() {
      var tokenContainingElement = document.getElementById("token");
      if (tokenContainingElement !== null) {
        window.ReactNativeWebView.postMessage(tokenContainingElement.innerHTML);
      }
      return true;
    })()
  `;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text style={styles.header}>Login formular</Text>
      <View style={styles.webView}>
        <WebView
          ref={webview}
          source={{url: authUrl}}
          injectedJavaScript={setPostMessageForToken}
          onMessage={event => onSuccess(event.nativeEvent.data)}
          overScrollMode={'never'}
          scrollEnabled={false}
          style={styles.webView}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    padding: 20,
  },
  webView: {
    backgroundColor: 'rgba(238,243,242,1)',
    flex: 0,
    flexGrow: 0,
    width: 200,
    height: 215,
  }
});

export default LoginForm;
