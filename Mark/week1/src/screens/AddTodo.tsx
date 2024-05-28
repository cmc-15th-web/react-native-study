import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

const AddToDo = () => {
  const navigation = useNavigation();

  return (
    // ...
    <Button title="돌아가기" onPress={() => navigation.goBack()} />
  );
};

export default AddToDo;