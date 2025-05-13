import {Image, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import {BackgroundRectangle} from '@/assets/images';

const Background = () => {
  return (
    <Image
      style={{
        paddingTop: 100,
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#242C3B',
      }}
      resizeMode="cover"
      source={BackgroundRectangle}
    />
  );
};

export default Background;
