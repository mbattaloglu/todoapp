import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React, {FC} from 'react';
import styles from './TaskCard.style';

interface ICardProps {
  isCompleted: boolean;
  item: any;
  onDelete: () => void;
}

const TaskCard: FC<ICardProps> = ({isCompleted, item, onDelete}) => {
  return isCompleted ? (
    <TouchableWithoutFeedback onLongPress={onDelete}>
      <View style={styles.completedContainer}>
        <Text style={styles.completedText}>{item.task}</Text>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback onLongPress={onDelete}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.task}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TaskCard;
