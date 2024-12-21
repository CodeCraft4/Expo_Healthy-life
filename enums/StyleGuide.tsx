import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ACTIVE_OPACITY = 0.9;
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export {HEIGHT, WIDTH, wp, hp, ACTIVE_OPACITY};
