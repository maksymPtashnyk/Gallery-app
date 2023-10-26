/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {Image, StyleSheet, Text, View} from 'react-native';

export function DetailsScreen({route}) {
  const {photo} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={{uri: photo.urls.regular}} style={styles.photo} />
      <Text>Username: {photo.user.username}</Text>
      <Text>Description: {photo.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: '100%',
    aspectRatio: 1,
  },
});
