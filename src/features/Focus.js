import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { paddingSizes } from '../utils/sizes'

import { RoundedButton } from '../components/RoundedButton';
import {Timer } from './Timer'

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
    <View> 
    <Timer focusSubject={subject}/>
    </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject} // this is the same as (val) => {setSubject(val)}
          label="What do you want to focus on?"
          value={subject}
onSubmitEditing={({ nativeEvent: { text } }) => setSubject(text)}        
/>
        <View style={styles.button}>
          <RoundedButton 
          style={styles.button} 
          size={50} 
          title="+" 
          onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5, padding: paddingSizes.md, justifyContent: "center"
  },
  textInput: {
    // flex: 1,

  },
  inputContainer: {
    flexDirecion: 'row',
  },
  button: {
    marginLeft: paddingSizes.sm, alignSelf: "center" 
  },
  text: {
    color: colors.white,
  },
});
