import React, {useState} from "react";
import {Container, Typography} from "@mui/material";
import TodoItemComponent from "./TodoItemComponent";
import {TodoItem} from "../model/TodoItem";

interface TodoListProp {
}

const TodoListComponent: React.FC<TodoListProp> = (props: TodoListProp) => {
    const [items, setItems] = useState<TodoItem[]>([{ id: "123", text: "Hello World", completed: false}]);

    const handleChange = (updatedItem: TodoItem) => {
        setItems([
            ...items.filter(x => x.id != updatedItem.id),
           updatedItem
        ]);
    }

    return (
        <><Container>
            <Typography variant="h3" component="h3">
                Hello World
            </Typography>
            {items.map(item => (
                <TodoItemComponent item={item} onChanged={item => handleChange(item)}></TodoItemComponent>
            ))}
        </Container></>
    );
}

export default TodoListComponent;