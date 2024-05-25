import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from 'react-native';
import {useToDoStore} from '../stores/ToDoStore';
import {useThemeStore} from '../stores/ThemeStore';

import CheckSvg from '../assets/img/Check.svg';
import CircleSvg from '../assets/img/Circle.svg';
import TrashSvg from '../assets/img/Trash.svg';

type ToDoItemProps = {
  id: string;
  title: string;
  status: boolean;
};

const ToDoItem: React.FC<ToDoItemProps> = ({id, title, status}) => {
  const {toggleStatus, removeToDo} = useToDoStore();
  const {themeColor} = useThemeStore();
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggleStatus = () => {
    toggleStatus(id);
  };

  const handleRemoveToDo = () => {
    setModalVisible(true);
    // removeToDo(id);
  };

  const RemoveToDo = () => {
    removeToDo(id);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleToggleStatus}
        style={[
          styles.container,
          status ? {backgroundColor: themeColor} : null,
        ]}>
        {status ? (
          <CheckSvg width={30} height={30} style={{color: themeColor}} />
        ) : (
          <CircleSvg width={30} height={30} style={{color: themeColor}} />
        )}

        <Text style={[styles.title, status ? {color: 'white'} : null]}>
          {title}
        </Text>

        <TouchableOpacity onPress={handleRemoveToDo}>
          <TrashSvg
            width={30}
            height={30}
            style={{color: status ? '#FFFFFF' : themeColor}}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      {/* 모달화면 */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalBack}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>정말 삭제하시겠습니까?</Text>
            <View style={styles.modalUnder}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => RemoveToDo()}>
                <Text style={styles.buttonText}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    marginHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    marginEnd: 'auto',
    marginLeft: 8,
  },
  completedContainer: {
    backgroundColor: '#FF8F50',
    color: 'white',
  },
  modalBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 10,
  },
  modalUnder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalText: {
    color: 'white',
    backgroundColor: 'none',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ToDoItem;
