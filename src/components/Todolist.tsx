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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";

interface Todo {
  val: string;
  isDone: boolean;
  id: number;
}

const Todolist: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [editedId, setEditedId] = useState<number | null>(null);
  const [tempId, setTempId] = useState<number>(0);
  const [tempVal, setTempVal] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handlePassword = () => {
    if (isDeleted == true) {
      if (password == "prova") {
        const newTodos = todos.filter((todo) => todo.id !== tempId);
        setTodos(newTodos);
        setOpenDialog(false);
      } else {
        alert("Password errata");
        setOpenDialog(false);
      }
      setIsDeleted(false);
    } else if (isEdited == true) {
      if (password == "prova") {
        setOpenDialog(false);
      } else {
        alert("Password errata");
        setOpenDialog(false);
        setTodos([...todos, { val: tempVal, isDone: false, id: tempId }]);
        setInputVal("");
        setIsEdited(false);
      }
    } else {
      if (password == "prova") {
        setOpenDialog(false);
        setTodos([
          ...todos,
          { val: inputVal, isDone: false, id: new Date().getTime() },
        ]);
        setInputVal("");
      } else {
        alert("Password errata");
        setOpenDialog(false);
      }
    }
    setPassword("");
    setTempId(0);
    setTempVal("");
  };

  const handleClick = () => {
    if (!isEdited) {
      setOpenDialog(true);
    } else {
      setTodos([...todos, { val: inputVal, isDone: false, id: editedId! }]);
      setInputVal("");
      setIsEdited(false);
    }
  };

  const onDelete = (id: number) => {
    setOpenDialog(true);
    setIsDeleted(true);
    setTempId(id);
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

  const handleEdit = (id: number, val: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const editVal = todos.find((todo) => todo.id === id);
    if (editVal) {
      setEditedId(editVal.id);
      setInputVal(editVal.val);
      setTodos(newTodos);
      setIsEdited(true);
    }
    setOpenDialog(true);
    setTempId(id);
    setTempVal(val);
  };

  return (
    <Container
      component="main"
      className="container"
      sx={{ maxHeight: "calc(100vh - 300px)" }}
    >
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
      <Dialog  open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="xs">
        <div className="dialogContainer">
        <DialogTitle>Inserire Password</DialogTitle>
        <DialogContent className="dialogContent">
        <FormControl>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input
              id="password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </DialogContent>
        </div>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePassword} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      
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
              onClick={() => handleEdit(todo.id, todo.val)}
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
