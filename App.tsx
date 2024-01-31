import React from 'react';
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
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
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
