import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React, {FC} from 'react';
import styles from './FloatingButton.style';

interface IButtonProps{
  onPress: () => void;
}

const FloatingButton:FC<IButtonProps> = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.icon}>+</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FloatingButton;
