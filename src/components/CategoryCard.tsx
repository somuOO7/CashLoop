import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
const BOX_SIZE = 50;
const HEIGHT = 100;

type CategoryCardProp = {
  index: number;
  totalBoxes: number;
};

const CategoryCard = ({index, totalBoxes}: CategoryCardProp) => {
  const selectedColors = ['#34C8E8', '#4E4AF2'];
  const unselectedColors = ['#353F54', '#222834'];

  const stepX = (width - BOX_SIZE - 40) / (totalBoxes - 1);
  const stepY = (HEIGHT - BOX_SIZE) / (totalBoxes - 1);

  return (
    <TouchableOpacity
      style={[
        style.container,
        {
          top: HEIGHT - BOX_SIZE - stepY * index,
          left: stepX * index,
        },
      ]}>
      <LinearGradient
        colors={
          index == 0 ? selectedColors : unselectedColors
        } style={{flex: 1}}></LinearGradient>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: BOX_SIZE,
    width: BOX_SIZE,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default CategoryCard;
