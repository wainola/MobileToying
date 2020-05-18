import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = ({navigation}) => {
  const handlePress = () => {};
  return (
    <View>
      <View style={styles.container}>
        <Text>Welcome user</Text>
      </View>
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
