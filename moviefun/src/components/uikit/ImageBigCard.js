import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { w } from '../../../constants';

const ImageBigCard = ({ data }) => {
  const { image } = data;
  return (
    <View style={styles.container}>
      <View style={styles.sub}>
        <Image style={styles.cover} source={{ uri: image.original }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
  },
  cover: {
    borderRadius: 10,
    width: w / 1.67,
    height: w * 0.9,
  },
});

export default ImageBigCard;
