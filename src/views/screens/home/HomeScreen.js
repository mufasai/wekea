import {
  View,
  TextInput,
  StyleSheet,
  Text,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import { IconButton } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    padding: 10,
    gap: 10,
    flex: 1,
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: '#f5f5f5',
  },
  imageCarousel: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

function HomeScreen({ navigation }) {
  const { width } = useWindowDimensions();
  const dataCarrousel = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1679558879563-335ee6932106?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      {/* SearchBar Component*/}
      <View style={styles.searchBarContainer}>
        <View style={[styles.searchBar, styles.borderShadow]}>
          <Ionicons name="search" size={12} />
          <TextInput placeholder="Mau cari apa?" />
        </View>
        <IconButton icon="menu" />
      </View>

      {/* Carousel Component */}
      <View style={{ alignItems: 'center' }}>
        <Carousel
          loop={false}
          width={width - 30}
          height={200}
          data={dataCarrousel}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <Image
              style={styles.imageCarousel}
              source={{
                uri: item.imageUrl,
              }}
            />
          )}
        />
      </View>

      {/* Category Component */}
      <ScrollView horizontal>
        <IconButton icon="home" />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
