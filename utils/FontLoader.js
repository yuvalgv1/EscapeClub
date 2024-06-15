import * as Font from 'expo-font';

// Load custom font
export const loadCustomFont = async () => {
  await Font.loadAsync({
    YellowGinger: require('../assets/fonts/Yellow Ginger.ttf'),
  });
};
