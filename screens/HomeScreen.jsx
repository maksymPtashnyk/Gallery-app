/* eslint-disable react-native/no-inline-styles */

import {
  fetchPhotosAsync,
  selectPhotos,
  selectPhotosStatus,
} from '../redux/photoSlice';

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image, Pressable, StyleSheet, Text, View, FlatList} from 'react-native';

export function HomeScreen({navigation}) {
  const photos = useSelector(selectPhotos);
  const photosStatus = useSelector(selectPhotosStatus);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhotosAsync());
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      {photosStatus === 'loading' ? (
        <Text>Loading...</Text>
      ) : photosStatus === 'failed' ? (
        <Text>Error: {photosStatus.error}</Text>
      ) : (
        <FlatList
          data={photos}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({item}) => (
            <View style={styles.photoContainer}>
              <Pressable
                onPress={() => navigation.navigate('Details', {photo: item})}>
                <Image source={{uri: item.urls.regular}} style={styles.photo} />
                <Text>{item.user.username}</Text>
              </Pressable>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    flex: 1,
    margin: 10,
  },
  photo: {
    width: '100%',
    aspectRatio: 1,
  },
});
