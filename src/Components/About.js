import React from "react";

const About = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card my-4" style={{ maxWidth: "65vw" }}>
        <h2 className="card-header text-center">About</h2>
        <div className="card-body">
          <p className="card-text">
            This project is a single-page application (SPA) built with React. It
            allows users to manage their tasks by storing them in the local
            storage under the key "todos". Upon loading, the application checks
            if there are any existing tasks stored in the local storage. If
            there are, it loads those tasks; otherwise, it initializes an empty
            array.
          </p>
          <p className="card-text">
            The project utilizes the useState and useEffect hooks provided by
            React for managing state and side effects, respectively.
            Additionally, it uses React Router for implementing routes and
            navigation within the application.
          </p>
          <p className="card-text">
            This About section aims to provide a brief overview of the project's
            functionality and technologies used. For more information or
            inquiries, feel free to reach out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
