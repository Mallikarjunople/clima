import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : ""); //or handling input field

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update note"
            className="todo-input"
            name="text"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Update Note</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a note"
            className="todo-input"
            name="text"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add Note</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
