import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Please fill all the fields");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card my-4" style={{ minWidth: "65vw" }}>
        <h3 className="card-header text-center">Add Todo</h3>
        <div className="card-body">
          <form
            onSubmit={submit}
            className="d-flex flex-column justify-content-center"
          >
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Todo task
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Todo description
              </label>
              <input
                type="text"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                className="form-control"
                id="desc"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-block btn-lg btn-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
