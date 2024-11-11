import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const datas = [
  {
    id: 1,
    image: require('./Data/download(4).png'),
    name: 'Resort',
  },
  {
    id: 2,
    image: require('./Data/download(4).png'),
    name: 'Homestay',
  },
  {
    id: 3,
    image: require('./Data/download(5).png'),
    name: 'Hotel',
  },
  {
    id: 4,
    image: require('./Data/download(6).png'),
    name: 'Lodge',
  },
];
const datas2 = [
  {
    id: 5,
    image: require('./Data/download(7).png'),
    name: 'Villa',
  },
  {
    id: 6,
    image: require('./Data/download(8).png'),
    name: 'Apertments',
  },
  {
    id: 7,
    image: require('./Data/download(9).png'),
    name: 'Hostel',
  },
  {
    id: 8,
    image: require('./Data/download(10).png'),
    name: 'See all',
  },
];
const datas3 = [
  {
    id: 6,
    image: require('./Data/download(8).png'),
    name: 'Apertments',
  },
  {
    id: 7,
    image: require('./Data/download(9).png'),
    name: 'Hostel',
  },
  {
    id: 8,
    image: require('./Data/download(10).png'),
    name: 'See all',
  },
];
const Item = ({ image, name }) => {
  return (
    <View
      style={{
        width: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Image
        source={image}
        style={{ width: 40, height: 40, backgroundColor: 'cyan' }}
      />
      <Text>{name}</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: 'violet' }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Image
            source={require('./Data/download(1).png')}
            style={{ width: 40, height: 40 }}
          />
          <Input
            inputContainerStyle={{
              borderWidth: 1,
              borderRadius: 10,
              width: '80%',
              backgroundColor: 'white',
            }}
            placeholder="Search hear"
            inputStyle={{ padding: 10 }}
            rightIcon={() => <Icon name="search" size={20} color="gray" />}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            alignItems: '',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('./Data/download(2).png')}
              style={{ width: 30, height: 30, borderRadius: 50 }}
            />
            <View>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Welcome !
              </Text>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Donna Stroupe
              </Text>
            </View>
          </View>
          <View>
            <Icon name="envelope" color={'white'} size={20} />
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <Text>Category</Text>
            <Icon name="list" size={30} />
          </View>
          <View>
            <FlatList
              data={datas}
              keyExtractor={(item) => item.id}
              horizontal
              renderItem={({ item }) => (
                <Item image={item.image} name={item.name} />
              )}
            />
            <FlatList
              data={datas2}
              keyExtractor={(item) => item.id}
              horizontal
              renderItem={({ item }) => (
                <Item image={item.image} name={item.name} />
              )}
            />
          </View>
          
        </View>
        <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text>Popular Destinations</Text>
              <Icon name="list" size={30} />
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image
                source={require('./Data/download(8).png')}
                style={{ borderRadius: 10, width: 90, height: 90 }}
              />
              <Image
                source={require('./Data/download(9).png')}
                style={{ borderRadius: 10, width: 90, height: 90 }}
              />
              <Image
                source={require('./Data/download(10).png')}
                style={{ borderRadius: 10, width: 90, height: 90 }}
              />
            </View>
          </View>
          <View>
            <Text>Recommand</Text>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <Image source={require('./Data/download(10).png')} style={{ borderRadius: 10, width: 90, height: 90 }} />
               <Image source={require('./Data/download(10).png')} style={{ borderRadius: 10, width: 90, height: 90 }}/>
            </View>
          </View>
        
      </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: 'violet',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 5,
        }}>
        <View>
          <Image
            source={require('./Data/download(13).png')}
            style={{ width: 40, height: 40 }}
          />
          <Text>Home</Text>
        </View>
        <View>
          <Image
            source={require('./Data/download(14).png')}
            style={{ width: 40, height: 40 }}
          />
          <Text>Explore</Text>
        </View>
        <View>
          <Image
            source={require('./Data/download(15).png')}
            style={{ width: 40, height: 40 }}
          />
          <Text>Search</Text>
        </View>
        <View>
          <Image
            source={require('./Data/download(16).png')}
            style={{ width: 40, height: 40 }}
          />
          <Text>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
