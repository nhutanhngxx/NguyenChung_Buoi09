import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {useEffect} from 'react'
import {fetchAllUsers} from '../redux/reducer'
import { useDispatch, useSelector } from 'react-redux';
const datas = [
  {
    id: 1,
    image: require('../bifo.png'),
    name: 'Villa',
    price: 1800,
  },
  {
    id: 2,
    image: require('../bifo.png'),
    name: 'Apertments',
    price: 1800,
  },
  {
    id: 3,
    image: require('../bifo.png'),
    name: 'Hostel',
    price: 1800,
  },
  {
    id: 4,
    image: require('../bifo.png'),
    name: 'See all',
    price: 1800,
  },
  {
    id: 5,
    image: require('../bifo.png'),
    name: 'Hostel',
    price: 1800,
  },
  {
    id: 6,
    image: require('../bifo.png'),
    name: 'See all',
    price: 1800,
  },
];

const Item = ({ image, name, price }) => {
  
  return (
    <TouchableOpacity>
    <View style={{ padding: 10 }}>
      <View
        style={{ backgroundColor: '#F7BA8326', padding: 10, borderRadius: 12 }}>
        <Image source={image} style={{ width: 135, height: 127 }} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 15, color: 'red' }}>{price}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};
const Screen02 = () => {
 const dispatch = useDispatch();

    // Get the data from Redux store
  const { users, loading, error } = useSelector((state) => state.counter); // Correct the typo from state.couter to state.counter
     useEffect(() => {
    dispatch(fetchAllUsers());
     // Fetch all users khi component mount
  }, [dispatch]);
  return (
    <View>
      <View>
        <Text>The world's Best Bike</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={{
            width: 100,
            padding: 5,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#E9414187',
          }}>
          <Text style={{ color: '#E9414187', alignSelf: 'center' }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            padding: 5,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#E9414187',
          }}>
          <Text style={{ color: '#E9414187', alignSelf: 'center' }}>
            RoudBike
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            padding: 5,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#E9414187',
          }}>
          <Text style={{ color: '#E9414187', alignSelf: 'center' }}>
            Mountain
          </Text>
        </TouchableOpacity>
      </View>
     
        <View style={{ padding: 10, alignSelf: 'center' }}>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <Item image={item.image} name={item.name} price={item.price} />
            )}
          />
        </View>
      
    </View>
  );
};
export default Screen02;
