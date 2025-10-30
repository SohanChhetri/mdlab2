/**
 * My To Do List App
 *
 * @format
 */


import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Form at the top */}
      <ToDoForm />


      {/* Scrollable list of tasks */}
      <ScrollView style={styles.list}>
        <ToDoList />
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 10,
  },
});


export default App;
