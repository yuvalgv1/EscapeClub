import React, { useState } from 'react';
import { View, Text, Button, ScrollView, Image } from 'react-native';
import styles from './style';

const ExploreScreen = () => {
  const [view, setView] = useState('Rooms');

  const data = {
    Rooms: [
      { id: 1, image: 'https://example.com/room1.jpg', details: 'Room 1 Details' },
      { id: 2, image: 'https://example.com/room2.jpg', details: 'Room 2 Details' },
      { id: 3, image: 'https://example.com/room3.jpg', details: 'Room 3 Details' },
      { id: 4, image: 'https://example.com/room4.jpg', details: 'Room 4 Details' },
      { id: 5, image: 'https://example.com/room5.jpg', details: 'Room 5 Details' },
    ],
    Partners: [
      { id: 1, image: 'https://example.com/partner1.jpg', details: 'Partner 1 Details' },
      { id: 2, image: 'https://example.com/partner2.jpg', details: 'Partner 2 Details' },
    ],
  };

  const renderCards = () => {
    return data[view].map((item) => (
      <View key={item.id} style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.details}>{item.details}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Button title="Rooms" onPress={() => setView('Rooms')} />
        <Button title="Partners" onPress={() => setView('Partners')} />
      </View>
      <ScrollView>
        {renderCards()}
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;
