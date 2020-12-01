import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";


export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        setTodos(prev => [
            {
                id: Date.now().toString(),
                title
            },
            ...prev,
        ])
    };

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    };

    return (
        <View>
            <Navbar title={'Todo App'}/>
            <View style={styles.container}>
                <MainScreen addTodo={addTodo} todos={todos} removeTodo={removeTodo}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
