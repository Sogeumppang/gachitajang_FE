import {WebView} from 'react-native-webview';
import { Image, StyleSheet, Platform, ScrollView, View, TouchableOpacit, Text, TouchableOpacity } from 'react-native';

import  * as KakaoLogin from '@react-native-seoul/kakao-login';
import axios from 'axios';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from "@react-navigation/native";
import { storeAccessToken, getUserInfo, getAccessToken } from "../../components/storage/KakaoInfo"


const REST_API_KEY = 'da167a1f7550695990cc387b5a9dd27e'
const REDIRECT_URI = 'http://192.168.0.2:8081/Home'
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

export default function LoginScreen() {

  const navigation = useNavigation();
  
  function KakaoLoginWebView (data) {
    const exp = "code=";
    var condition = data.indexOf(exp);    
    if (condition != -1) {
      var authorize_code = data.substring(condition + exp.length);
      console.log(authorize_code);
      requestToken(authorize_code);
    };
  }

  const requestToken = async (authorize_code) => {
    var AccessToken = "none";
    axios ({
      method: 'post',
      url: 'https://kauth.kakao.com/oauth/token',
      params: {
        grant_type: 'authorization_code',
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: authorize_code,
      },
    }).then((response) => {
      AccessToken = response.data.access_token;
      storeAccessToken(AccessToken);  // 유저 토큰 저장
      getUserInfo(getAccessToken)   //  유저 토큰 출력
    }).catch(function (error) {
      console.log('error', error);
    })
    navigation.navigate("TabLayout");
  };

  return ( 
    Platform.OS === "web" ? (
    //useEffect(() => navigation.navigate("TapLayout"))   //웹은 카카오 api가 안먹힘...
    //<iframe src={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`}
    //height={'100%'} width={'100%'} />
    <TouchableOpacity
        onPress={() => navigation.navigate("TabLayout")}>
          <Text>넘어가기</Text>
          <Text>넘어가기</Text>
          <Text>넘어가기</Text>
          <Text>넘어가기</Text>
    </TouchableOpacity>
  ) : (
    <View style={Styles.container}>     
      <WebView
        style={{ flex: 1 }}
        originWhitelist={['*']}
        scalesPageToFit={false}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        //onMessage={event => { KakaoLoginWebView(event.nativeEvent["url"]); }}
        onMessage={event => { KakaoLoginWebView(event.nativeEvent["url"]); navigation.navigate("TabLayout")}}
      />
    </View>
  )
  );
}

const getProfile = () => {
  KakaoLogin.getProfile().then((result) => {
      console.log("GetProfile Success", JSON.stringify(result));
  }).catch((error) => {
      console.log(`GetProfile Fail(code:${error.code})`, error.message); 
  });
};


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },    
});
