import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
const Screen01 = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        height: '100%',
        padding: 10,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Text style={{ textAlign: 'center' }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View style={{backgroundColor:'#E941411A', padding:10, borderRadius:20}}>
        <Image source={require('../bifour_-removebg-preview.png')} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          POWER BIKE SHOP
        </Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 120,
            padding: 10,
            borderRadius: 15,
          }}
          onPress={()=>navigation.navigate('Screen02')}
          >
          <Text style={{ color: 'white', alignSelf: 'center' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen01;
