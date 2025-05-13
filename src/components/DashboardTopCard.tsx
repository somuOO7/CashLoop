import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {TopCardPolygon} from '@/assets/images';

const {width, height} = Dimensions.get('window');

const DashboardTopCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.background}
        source={TopCardPolygon}
        resizeMode="cover"
      />

      {/* Content View */}
      <View>
        <Text>Jeasdas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    height: 340,
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  background: {
    width: width,
    height: 340,
    position: 'absolute',
    zIndex: -1,
  },
});

export default DashboardTopCard;
