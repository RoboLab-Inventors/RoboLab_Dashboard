import React, { useState } from "react";
import "../style/Todolist.css";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  List,
  ListItem,
  Container,
} from '@mui/material';

interface Todo {
  val: string;
  isDone: boolean;
  id: number;
}

const Todolist: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [editedId, setEditedId] = useState<number | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleClick = () => {
    if (!isEdited) {
      setTodos([
        ...todos,
        { val: inputVal, isDone: false, id: new Date().getTime() }
      ]);
    } else {
      setTodos([...todos, { val: inputVal, isDone: false, id: editedId! }]);
    }
    setInputVal("");
    setIsEdited(false);
  };

  const onDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleDone = (id: number) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updated);
  };

  const handleEdit = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const editVal = todos.find((todo) => todo.id === id);
    if (editVal) {
      setEditedId(editVal.id);
      setInputVal(editVal.val);
      setTodos(newTodos);
      setIsEdited(true);
    }
  };

  return (
    <Container component="main" className="container" sx={{ maxHeight: 'calc(100vh - 300px)' }}>
      <TextField
        variant="outlined"
        onChange={onChange}
        label="type your task"
        value={inputVal}
        className="input"
      />
      <Button
        size="large"
        variant={isEdited ? "outlined" : "contained"}
        color="primary"
        onClick={handleClick}
        className="addButton"
        disabled={!inputVal}
      >
        {isEdited ? "Edit Task" : "Add Task"}
      </Button>
      <List>
        {todos.map((todo) => (
          <ListItem divider key={todo.id} className="list">
            <Checkbox
              onClick={() => handleDone(todo.id)}
              checked={todo.isDone}
            />
            <Typography
              className="text"
              style={{ color: todo.isDone ? "green" : "" }}
            >
              {todo.val}
            </Typography>
            <Button
              onClick={() => handleEdit(todo.id)}
              variant="contained"
              className="listButtons"
            >
              Edit
            </Button>
            <Button
              onClick={() => onDelete(todo.id)}
              color="secondary"
              variant="contained"
              className="listButtons"
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Todolist;
