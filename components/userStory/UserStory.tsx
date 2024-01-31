import React, {FC} from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';
interface UserStoryProps {
  firstName: string;
  profileImage: any;
}
const UserStory: FC<UserStoryProps> = ({firstName, profileImage}) => {
  return (
    <View style={style.storyContainer}>
      <Image source={profileImage} />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
