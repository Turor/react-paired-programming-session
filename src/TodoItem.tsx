import {Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";

interface TodoItemProps {
    text: string;
    completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {

    return (<ListItem>
        <ListItemButton>
            <ListItemIcon>
                <Checkbox edge="start" checked={props.completed}></Checkbox>
            </ListItemIcon>
            <ListItemText id={`todo-list-${props.text}`} primary={props.text}></ListItemText>
        </ListItemButton>
    </ListItem>);
}

export default TodoItem;