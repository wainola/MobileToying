import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {FAKE_API_REST} from 'react-native-dotenv';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import {AppContext} from './context';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

console.log('env', process.env, FAKE_API_REST);

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [isLogged, setLogged] = useState(false);
  console.log('isLogged', isLogged);
  return (
    <>
      <NavigationContainer>
        <AppContext.Provider value={setLogged}>
          <Stack.Navigator>
            {isLogged ? (
              <Stack.Screen
                name="Home"
                component={Home}
                options={{title: 'Welcome'}}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{title: 'Profile'}}
                />
                <Stack.Screen
                  name="Register"
                  component={Register}
                  option={{title: 'Register'}}
                />
              </>
            )}
          </Stack.Navigator>
        </AppContext.Provider>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
