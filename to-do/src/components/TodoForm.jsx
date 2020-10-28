import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(""); //or handling input field

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
    <>
      <p className="heading ">BatNote</p>
      <form className="todo-form" onSubmit={handleSubmit}>
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
      </form>
    </>
  );
}

export default TodoForm;
