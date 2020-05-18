import React from 'react';
import {TextInput} from 'react-native';

const TextInputCore = ({handleChange, placeholder, name}) => {
  return (
    <TextInput
      onChange={({nativeEvent: {text}}) => handleChange({value: text, name})}
      placeholder={placeholder}
    />
  );
};

export default TextInputCore;
