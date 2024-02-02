import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyles from './assets/styles/globalStyles';
import UserStory from './components/userStory/UserStory';
import {userPosts, userStories} from './data/data';
import UserPost from './components/userPost/UserPost';
import {Post} from './data/models/models.ts';

function App() {
  //create useState for userStories
  const [pageLength] = useState(4);
  const [userStoriesCurrentPage, setUserStorieCurrentPage] = useState(1);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<any[]>(
    [],
  );

  //create useStates for postsFeeds
  const [postsLength] = useState(2);
  const [postCurrentPage, setPostCurrentPage] = useState(1);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [postsRenderedData, setPostsRenderedData] = useState<any[]>([]);

  const pagination = (
    database: any[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startingIndex = (currentPage - 1) * pageSize;
    const endIndex = startingIndex + pageSize;
    if (startingIndex >= database.length) {
      return [];
    }
    return database.slice(startingIndex, endIndex);
  };

  const postsPaginaton = (
    database: any[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    //loading user stories
    setIsLoadingUserStories(true);
    setUserStoriesRenderedData(
      pagination(userStories, userStoriesCurrentPage, pageLength),
    );
    setIsLoadingUserStories(false);

    //loading user posts
    setIsLoadingPosts(true);
    setPostsRenderedData(
      postsPaginaton(userPosts, postCurrentPage, postsLength),
    );
    setIsLoadingPosts(false);
  }, []);
  return (
    <SafeAreaView>
      <View style={globalStyles.userPostContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyles.header}>
                <Title title="Let’s Explore " />
                <TouchableOpacity style={globalStyles.messageIcon}>
                  <FontAwesomeIcon icon={faEnvelope} size={20} color={'gray'} />
                  <View style={globalStyles.messageIconContainer}>
                    <Text>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyles.userStoryContainer}>
                <FlatList
                  // onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const newPage = userStoriesCurrentPage + 1;
                    const contentToAppend = pagination(
                      userStories,
                      newPage,
                      pageLength,
                    );

                    if (contentToAppend.length > 0) {
                      setUserStorieCurrentPage(newPage);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => {
                    return (
                      <UserStory
                        key={'userstory' + item.id}
                        firstName={item.firstName}
                        profileImage={item.profileImage}
                      />
                    );
                  }}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={postsRenderedData}
          onEndReached={() => {
            console.log(
              'userposts reached end event, get new posts if avaliable',
            );

            if (isLoadingPosts) {
              return;
            }
            const newPage = postCurrentPage + 1;
            const contentToAppend = pagination(userPosts, newPage, postsLength);
            if (contentToAppend.length > 0) {
              setPostCurrentPage(newPage);
              setIsLoadingPosts(true);
              setPostsRenderedData(prev => [...prev, ...contentToAppend]);
              setIsLoadingPosts(false);
            }
          }}
          renderItem={({item}) => {
            return <UserPost key={'post' + item.id} post={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
