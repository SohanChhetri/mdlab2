import { Button, StyleSheet, TextInput, View } from 'react-native';


const ToDoForm = () => {
    return (
        <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            />
        <Button title="Add" />
        </View>
    );
};


const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 25,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#aaa',
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginRight: 8,
    },
});


export default ToDoForm;
