import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete }) => {
  let myStyle = {
    minHeight: "50vh",
    margin: "10px auto",
  };
  return (
    <div
      className="container my-4 d-flex justify-content-center"
      style={myStyle}
    >
      <div className="card" style={{ minWidth: "65vw" }}>
        <h3 className="card-header text-center ">Todos List</h3>
        <div className="card-body">
          {todos.length === 0
            ? "No Todos Available"
            : todos.map((todo) => {
                return (
                  <TodoItem todo={todo} key={todo.id} onDelete={onDelete} />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
