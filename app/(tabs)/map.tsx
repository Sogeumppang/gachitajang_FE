import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text, TextInput } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons"
import { SetStateAction, useState } from 'react';

import { WebView } from 'react-native-webview';

import MapView, { Marker } from 'react-native-maps';


export default function Map() {
  const [searchText, setSearchText] = useState('');
  const onChangeSearchText = (inputText: SetStateAction<string>) => {
    setSearchText(inputText);
  };

  // 지도
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.5666,
    longitude: 126.9774,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  });


  return (
    <View style={styles.mainView}>
      <View style={styles.upContainer}>
        <View style={styles.universityContainer}>
          <Text style={styles.universityFont}>
            삼육대학교
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <Icon name={"search"} size={hp(3)} color={"#4E7FFF"} />
          <TextInput onChangeText={onChangeSearchText} value={searchText} placeholder='삼육대학교' style={styles.searchFont}/>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <MapView style={styles.map}
          region={mapRegion}
        >
          <Marker coordinate={mapRegion} title='Marker' />
        </MapView>
      </View>
    </View>
  );
}

//<WebView source={{html: html}}/>

const styles = StyleSheet.create({
  mainView: {
    flex:1, 
    paddingTop: hp(2),
    backgroundColor: "#f8f8f8"
  },

  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  upContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8"
  },
  mapContainer: {
    backgroundColor: "#ffffff",
    flex: 7.5
  },
  

  universityContainer: {
    flex:1,
    borderWidth: hp(1),
    borderColor: "#f8f8f8",
    backgroundColor: "#f8f8f8"
   },
  universityFont: {
   fontSize: hp(3)
  },

  searchContainer: {
    flex:1,
    borderWidth: hp(1),
    borderRadius: 50,
    borderColor: "#f8f8f8",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center"
   },
  searchFont: {
   fontSize: hp(2.5) 
  },


  map: {
    width: '100%',
    height: '100%',
  },
});



const html = `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=앱키&libraries=services,clusterer,drawing"></script> 
    </head>
    <body >
        <div id="map" style="width:500px;height:400px;"></div>
        <script type="text/javascript">
            (function () {
                const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
                const options = { //지도를 생성할 때 필요한 기본 옵션
                    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                    level: 3 //지도의 레벨(확대, 축소 정도)
                };
                
                const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
                
                // 주소-좌표 변환 객체를 생성합니다
                const geocoder = new kakao.maps.services.Geocoder();
            })();
        </script>       
    </body>
</html>    
`;