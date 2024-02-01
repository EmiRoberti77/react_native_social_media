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

function App() {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Maria',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Kate',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Kelly',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Emily',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Emi',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  const [pageLength] = useState(4);
  const [userStoriesCurrentPage, setUserStorieCurrentPage] =
    useState<number>(1);

  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<any[]>(
    [],
  );

  const [isLoadingUserStories, setIsLoadingUserStories] =
    useState<boolean>(false);

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

  useEffect(() => {
    console.log('useEffect');
    console.log('currentPage if useEffecr', userStoriesCurrentPage);
    setIsLoadingUserStories(true);
    setUserStoriesRenderedData(
      pagination(userStories, userStoriesCurrentPage, pageLength),
    );
    setIsLoadingUserStories(false);
  }, []);
  return (
    <SafeAreaView>
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
            console.log(
              'currentPage',
              userStoriesCurrentPage,
              'newPage',
              newPage,
            );
            const contentToAppend = pagination(
              userStories,
              newPage,
              pageLength,
            );

            if (contentToAppend.length > 0) {
              setUserStorieCurrentPage(newPage);
              setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserStories(false);
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStoriesRenderedData}
          renderItem={({item}) => {
            return (
              <UserStory
                firstName={item.firstName}
                profileImage={item.profileImage}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
