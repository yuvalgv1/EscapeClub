import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CardStyles';

const Card = ({ image, details }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.details}>{details}</Text>
    </View>
  );
};

export default Card;
