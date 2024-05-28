// // 사용 안함

// import React from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {ArrowBackBtn} from '../assets/icons';
// import {StackNavigationProp} from '@react-navigation/stack';

// type HeaderProps = {
//   title: string;
//   navigation: StackNavigationProp<any>;
// };

// const Header: React.FC<HeaderProps> = ({title, navigation}) => {
//   return (
//     <View style={styles.header}>
//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         style={styles.headerLeft}>
//         <ArrowBackBtn width={24} height={24} fill="black" />
//       </TouchableOpacity>
//       <View style={styles.headerTitleContainer}>
//         <Text style={styles.headerTitle}>{title}</Text>
//       </View>
//       <TouchableOpacity style={styles.headerRight}>
//         <Text style={styles.headerRightText}>완료</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//     height: 60,
//     paddingTop: 30,
//     borderBottomWidth: 0, // 밑 경계선 없애기
//     shadowOpacity: 0, // 그림자 없애기 (iOS)
//     elevation: 0, // 그림자 없애기 (Android)
//   },
//   headerLeft: {
//     paddingLeft: 20,
//   },
//   headerTitleContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 10, // 제목의 좌우 간격 조정
//   },
//   headerTitle: {
//     fontSize: 18,
//   },
//   headerRight: {
//     paddingRight: 22,
//   },
//   headerRightText: {
//     fontSize: 16,
//   },
// });

// export default Header;
