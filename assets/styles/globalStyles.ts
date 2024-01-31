import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyles = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },
  messageIconContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 15,
    height: 15,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    right: 12,
    top: 8,
  },
  messageNumber: {
    color: 'white',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});

export default globalStyles;
