import React, {FC} from 'react';
import {View, Image} from 'react-native';
import style from './style';

interface UserProfileImageProps {
  profileImage: any;
  dimention: number;
}

const UserProfileImage: FC<UserProfileImageProps> = ({
  profileImage,
  dimention,
}) => {
  return (
    <View style={[style.borderImageContainer, {borderRadius: dimention}]}>
      <Image
        style={{width: dimention, height: dimention}}
        source={profileImage}
      />
    </View>
  );
};

export default UserProfileImage;
