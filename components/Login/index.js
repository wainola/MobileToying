import React, {useState, useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AppContext} from '../../context';
import TextInputCore from '../core/TextInput';
import {post} from '../../utils/restClient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
  },
  titleText: {
    fontSize: 30,
  },
});

const Login = ({navigation}) => {
  const setContextFunc = useContext(AppContext);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const handleChange = ({value, name}) => {
    console.log(value, name);
    setState({
      ...state,
      [name]: value,
    });
  };
  const handlePress = async evt => {
    if (state.email && state.password) {
      const data = await post({});
      if (data.code === 201) return setContextFunc(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Login screen</Text>
      </View>
      <View>
        <View>
          <Text>Email</Text>
          <TextInputCore
            handleChange={handleChange}
            placeholder="Enter your email"
            name="email"
          />
        </View>
        <View>
          <Text>Contraseña</Text>
          <TextInputCore
            handleChange={handleChange}
            placeholder="Enter your password"
            name="password"
          />
        </View>
        <View>
          <Button title="Signup" onPress={handlePress} />
        </View>
      </View>
    </View>
  );
};

export default Login;
