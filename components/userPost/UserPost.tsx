/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Post} from '../../data/models';
import UserProfileImage from '../userProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import style from './style';

interface UserPostProp {
  post: Post;
}

const UserPost: FC<UserPostProp> = ({post}) => {
  const {firstName, lastName, profileImage, location} = post;
  return (
    <View>
      <View style={style.userContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            <UserProfileImage profileImage={profileImage} dimention={48} />
            <View style={style.userTextContainer}>
              <Text style={style.username}>
                {firstName} {lastName}
              </Text>
              {location && <Text style={style.location}>{location}</Text>}
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            alignItems: 'flex-end',
            marginTop: 10,
          }}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </View>
      </View>
    </View>
  );
};

export default UserPost;
