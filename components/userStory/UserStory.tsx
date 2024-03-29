import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import style from './style';
import UserProfileImage from '../userProfileImage/UserProfileImage';
interface UserStoryProps {
  firstName: string;
  profileImage: any;
}
const UserStory: FC<UserStoryProps> = ({firstName, profileImage}) => {
  const handlePress = () => {
    Alert.alert(firstName);
  };
  return (
    <View style={style.storyContainer}>
      <TouchableOpacity onPress={handlePress}>
        <UserProfileImage profileImage={profileImage} dimention={52} />
        <Text style={style.firstName}>{firstName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserStory;
