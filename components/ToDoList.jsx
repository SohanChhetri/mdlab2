import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';


const ToDoList = () => {
    return (
        <ScrollView>
        <Pressable>
        <View style={[styles.task, styles.done]}>
            <Text style={styles.taskText}>Do laundry</Text>
        </View>
        </Pressable>


        <Pressable>
        <View style={styles.task}>
            <Text style={styles.taskText}>Go to gym</Text>
        </View>
        </Pressable>


        <Pressable>
        <View style={[styles.task, styles.done]}>
            <Text style={styles.taskText}>Walk dog</Text>
        </View>
        </Pressable>
    </ScrollView>
    );
};


const styles = StyleSheet.create({
    task: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    done: {
        backgroundColor: '#e5e5e5',
    },
    taskText: {
        fontSize: 16,
    },
});


export default ToDoList;