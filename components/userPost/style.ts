import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

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
    fontSize: scaleFontSize(12),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  postInsightContainer: {
    marginLeft: horizontalScale(10),
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: '#EFF2F6',
  },
});

export default style;
