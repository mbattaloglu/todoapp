import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import React, {useState, FC} from 'react';
import Modal from 'react-native-modal';
import styles from './AddTaskModal.style';

interface IModalProps {
  isVisible: boolean;
  onClose : () => void;
  onAddTask: (taskContent: string) => void;
}

const AddTaskModal: FC<IModalProps> = ({isVisible, onClose, onAddTask}) => {
  const [taskInputValue, setTaskInputValue] = useState<string>('');
  const handleAddTask = () => {
    if(taskInputValue) {
      onAddTask(taskInputValue);
    }
    setTaskInputValue('');
  }

  return (
    <Modal isVisible={isVisible} style={styles.modalContainer} onBackdropPress={onClose}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Add a Task</Text>
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          placeholderTextColor="grey"
          multiline={true}
          onChangeText={(text) => setTaskInputValue(text)}
          value={taskInputValue}
        />
        <TouchableWithoutFeedback onPress={handleAddTask}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonPlaceholder}>Add Task</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default AddTaskModal;
