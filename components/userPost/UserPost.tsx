/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import {Post} from '../../data/models';
import UserProfileImage from '../userProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBaby,
  faBookBookmark,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import {faComment, faHeart} from '@fortawesome/free-regular-svg-icons';

interface UserPostProp {
  post: Post;
}

const UserPost: FC<UserPostProp> = ({post}) => {
  const {
    firstName,
    lastName,
    profileImage,
    location,
    image,
    likes,
    comments,
    bookmarks,
  } = post;
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
          <FontAwesomeIcon icon={faEllipsisH} size={24} />
        </View>
      </View>
      <View style={style.postImage}>
        <Image source={image} />
      </View>
      <View style={style.postInsightContainer}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={{marginLeft: 3, color: '#79869F'}}>{likes}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faComment} color="#79869F" />
          <Text style={{marginLeft: 3, color: '#79869F'}}>{comments}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faBookBookmark} color="#79869F" />
          <Text style={{marginLeft: 3, color: '#79869F'}}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
