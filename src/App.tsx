import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Container, Typography} from '@mui/material';
import TodoItem from "./TodoItem";

function App() {
  return (
    <><Container> 
      <Typography variant="h3" component="h3">
        Hello World
      </Typography>
        <TodoItem text='Hallo' completed={false}></TodoItem>
      </Container></>
  );
}

export default App;
