import { Image, StyleSheet, Platform, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.backgroundContainer}>
      <ThemedView style={styles.logoContainer}>

      <Image source={require('../../assets/images/splash-logo.png')} 
            style={{height:'50%',width:'150%', transform: [{scale: 0.55}]}}/>
      </ThemedView>
      <ThemedView style={styles.loginContainer}>
      <View style={{alignItems: 'center'}}>      
      <TouchableOpacity style={styles.loginButton}
        onPress={() => navigation.navigate("LoginScreen", {screen: "loginScreen"})}>
          <Text style={styles.loginButtonText}>카카오 로그인</Text>
      </TouchableOpacity>
    </View>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer : {
    backgroundColor: '#010035',
    flex: 1
  }  ,
  logoContainer: {
    backgroundColor: '#010035',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  },
  loginContainer: {
    backgroundColor: '#010035',
    marginBottom: 8,
    flex: 1
  },
  loginButton: {
    backgroundColor: '#FEE500',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: hp(5),
    width: wp(60)
  },
  loginButtonText: {
    color: '#000000',
    fontSize: hp(2),
    fontWeight: '700'
  }
});
