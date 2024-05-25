import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import {useCustomStore} from '../hooks/useCustomStore';
import {COLORS} from '../theme';
import {CheckIcon, CircleIcon, TrashIcon} from '../components/custom-icons';

const HomeScreen = () => {
  const {tasks, deleteTask, toggleTaskCompletion} = useCustomStore();

  const {theme} = useCustomStore();

  return (
    <Layout>
      <Header title="Today" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {tasks.map(task => (
          <TouchableOpacity
            onPress={() => toggleTaskCompletion(task.id)}
            key={task.id}
            style={[
              styles.todoItem,
              {
                backgroundColor: task.completed
                  ? COLORS[theme]
                  : COLORS.primaryWhite,
              },
            ]}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
              {task.completed ? (
                <CheckIcon fill={COLORS.primaryWhite} />
              ) : (
                <CircleIcon fill={COLORS[theme]} />
              )}
              <Text
                style={[
                  styles.todoText,
                  {color: task.completed ? COLORS.primaryWhite : '#000000'},
                ]}>
                {task.text}
              </Text>
            </View>
            <TouchableOpacity onPress={() => deleteTask(task.id)}>
              <TrashIcon
                fill={task.completed ? COLORS.primaryWhite : COLORS[theme]}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingHorizontal: 20,
    gap: 10,
    width: 329,
    height: 56,
    borderRadius: 20,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
  },
});
