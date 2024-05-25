import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useId, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowLeft} from '../components/custom-icons';
import {useCustomStore} from '../hooks/useCustomStore';
import {COLORS} from '../theme';
import {TaskProps} from '../types/navigator';

const TaskScreen = ({navigation}: TaskProps) => {
  const insets = useSafeAreaInsets();
  const {theme, addTask} = useCustomStore();

  const id = useId();

  const [task, setTask] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitHandler = () => {
    setIsLoading(true);
    setError('');

    if (task.trim().length === 0) {
      setError('할일을 입력해주세요.');
      setIsLoading(false);
      return;
    }

    addTask({id, text: task, completed: false});
    setTask('');
    setError('');
    setIsLoading(false);

    navigation.navigate('Home');
  };

  const handleInputFocus = () => {
    setError('');
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          disabled={isLoading}>
          <ArrowLeft fill={COLORS[theme]} />
        </TouchableOpacity>
        <Text style={[styles.headerText, {color: COLORS[theme]}]}>
          할일을 추가해주세요!
        </Text>
        <TouchableOpacity onPress={submitHandler} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color={COLORS[theme]} />
          ) : (
            <Text style={[styles.headerText, {color: COLORS[theme]}]}>
              완료
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TextInput
          style={[
            styles.textInput,
            {
              backgroundColor: error === '' ? 'white' : 'rgba(255, 0, 0, 0.4)',
            },
          ]}
          value={task}
          onChangeText={text => setTask(text)}
          onFocus={handleInputFocus}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </ScrollView>
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
    width: '100%',
    height: 48,
    borderRadius: 0,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  textInput: {
    width: 329,
    height: 58,
    marginTop: 19,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});
