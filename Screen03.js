import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
const Screen01 = ({route,navigation}) => {
  const { user } = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        height: '100%',
        padding: 10,
      }}>
      <View
        style={{ backgroundColor: '#E941411A', padding: 10, borderRadius: 20,alignItems:'center' }}>
        <Image source={user.image} style={{width:135,height:127}} />
      </View>
      <View style={{  }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
         {user.name}
        </Text>
        <View style={{flexDirection:'row',}} >
          <Text>15% OFF I 350$</Text>
          <Text>{user.price}</Text>
        </View>
        <View style={{}} >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Description</Text>
          <Text>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View>
          <Image source={require('../akaricons_heart.png')}  />
        </View>
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
            Add to Card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen01;
