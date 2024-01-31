import React, {FC} from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import style from './style';
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
        <View style={style.borderImageContainer}>
          <Image style={style.image} source={profileImage} />
        </View>
        <Text style={style.firstName}>{firstName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserStory;
