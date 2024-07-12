import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";



export const storeAccessToken = async (returnValue: string) => {
    try {
      await AsyncStorage.setItem('userAccessToken', returnValue);
    } catch (error) {
        console.log('storeData error');
    }
}


export async function getAccessToken() {
    try {
      const value = await AsyncStorage.getItem('userAccessToken')
      if(value !== null) {
        console.log(value);
        return value;
      }
    } catch(e) {
      console.log('getData error');
    }
}

export function getUserInfo(AccessToken: any) {
    axios({
      method: 'GET',
      url: 'https://api.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${AccessToken}`
      }
    }).then((response) => {
      var user_email = response.data.kakao_account.email;
      var user_range = response.data.kakao_account.age_range;
      var user_gender = response.data.kakao_account.gender;
      
      console.log("user_email", user_email);
      console.log("user_range", user_range);
      console.log("user_gender", user_gender);

      console.log("all user info json:", response.data.kakao_account);

      return response.data.kakao_account;
    }).catch((error: any) => {
      console.log('userInfo error', error);
    });
}