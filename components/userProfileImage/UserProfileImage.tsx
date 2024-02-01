import React, {FC} from 'react';
import {View, Image} from 'react-native';
import style from '../userStory/style';

interface UserProfileImageProps {
  profileImage: any;
}

const UserProfileImage: FC<UserProfileImageProps> = ({profileImage}) => {
  return (
    <View style={style.borderImageContainer}>
      <Image style={style.image} source={profileImage} />
    </View>
  );
};

export default UserProfileImage;
