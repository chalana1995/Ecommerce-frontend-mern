import React, { useState } from "react";
import Layout from "../core/Layout";
import { API } from "../config";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signUp = async (user) => {
    fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log("==== error", err);
      });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    signUp({ name, email, password });
  };

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Passowrd</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );

  return (
    <>
      <Layout
        title="Signup page"
        description="Signup Node react e commerce app"
        className="container col-md-8 offset-md-2"
      >
        {signUpForm()}
      </Layout>
    </>
  );
}

export default Signup;
