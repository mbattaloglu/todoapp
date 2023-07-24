import {FlatList, View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import Colors from './styles/Colors';
import Fonts from './styles/Fonts';
import FloatingButton from './components/FloatingButton';
import AddTaskModal from './components/AddTaskModal';
import TaskCard from './components/TaskCard';

const App = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<any>([]);
  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  function addTask(taskContent: string) {
    const taskContentCheck = taskContent.trim().toLowerCase();
    const checkDublicate = todoList.find(
      (todo: any) => todo.task.trim().toLowerCase() === taskContentCheck,
    );
    if (taskContentCheck === '') {
      Alert.alert('Lütfen bir görev giriniz!');
    } else {
      if (checkDublicate) {
        Alert.alert('Bu görev zaten var!');
      } else {
        const newTask = {
          id: todoList.length + 1,
          task: taskContent,
          isCompleted: false,
        };
        setTodoList((oldTasks: any) => [...oldTasks, newTask]);
        setModalVisible(false);
      }
    }
  }

  const deleteTask = (task:any) => {
    if(!task.isCompleted) {
      const newList = todoList.map((todo:any) => {
        if(todo.id === task.id) {
          todo.isCompleted = true;
        }
        return todo;
      });
      setTodoList(newList);
    }
    else {
      const newList = todoList.filter((todo:any) => todo.id !== task.id);
      setTodoList(newList);
    }
  }

  const renderToDoList = ({item}: any) => (
    <TaskCard item={item} onDelete={() => deleteTask(item)} isCompleted={item.isCompleted}></TaskCard>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To Do List!</Text>
      <FlatList
        data={todoList}
        renderItem={renderToDoList}
        keyExtractor={item => item.id.toString()}
      />
      <FloatingButton onPress={handleModalVisible} />
      <AddTaskModal
        isVisible={modalVisible}
        onClose={handleModalVisible}
        onAddTask={addTask}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultDarkColor,
    flex: 1,
  },
  title: {
    color: Colors.defaultTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 26,
  },
});
