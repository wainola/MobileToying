import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  const handlePress = () => {};
  return (
    <View>
      <Text>Welcome user</Text>
      <View>
        <Text>Personal data</Text>
      </View>
      <View>
        <Text>Settings</Text>
      </View>
      <View>
        <Text>Expenses</Text>
      </View>
      <Button onPress={handlePress} title="Logout" />
    </View>
  );
};

export default Home;
