import {Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import {TodoItem} from "../model/TodoItem";

interface TodoItemProps {
    item: TodoItem;
    onChanged?: (item: TodoItem) => void;
}

const TodoItemComponent: React.FC<TodoItemProps> = (props: TodoItemProps) => {
    const [checked, setChecked] = React.useState(props.item.completed);

    const handleCheck = () =>
    {
        const newValue = !checked;
        setChecked(newValue);
        if (props.onChanged) {
            props.onChanged({ id: props.item.id, text: props.item.text, completed: newValue});
        }
    }

    return (<ListItem>
        <ListItemButton>
            <ListItemIcon>
                <Checkbox edge="start" checked={props.item.completed} onChange={handleCheck}/>
            </ListItemIcon>
            <ListItemText id={`todo-list-${props.item.id}`} primary={props.item.text}></ListItemText>
        </ListItemButton>
    </ListItem>);
}

export default TodoItemComponent;