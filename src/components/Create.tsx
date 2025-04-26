import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit");

    axios
      .post("https://680d06042ea307e081d5c3d5.mockapi.io/crud", {
        name: name,
        email: email,
        header,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
