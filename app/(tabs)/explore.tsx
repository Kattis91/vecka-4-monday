import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, SafeAreaView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FancyPersonRow } from '../FancyPersonRow';
import { nicestyle } from '.';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <FancyPersonRow firstname="AAAAAA" lastname="BBBBBB" />
      <Text style={nicestyle.nicetext}>Tabb 2 text</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
