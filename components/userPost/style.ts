import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 10,
    padding: 2,
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  username: {
    color: 'black',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
  },
});

export default style;
