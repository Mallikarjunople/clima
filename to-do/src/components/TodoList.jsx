import React, { useState } from "react";
import { icons } from "react-icons/lib";
import batIcon from "../assets/batman-icon.png";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(newTodos);
  };
  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };
  const removeTodo = (id) => {
    const afterRemove = [...todos].filter((todo) => todo.id !== id);

    setTodos(afterRemove);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  return (
    <>
      <div>
        <div className="heading ">
          <img src={batIcon} alt="imgag" style={{ padding: "8px" }}></img>
          <p className="headertext">
            {" "}
            BatNote<sub className="subs"> For BatFans</sub>
          </p>
        </div>
      </div>

      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
