import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Create() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.createUser.loading);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = ({ target: { value } }) => setName(value);
  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "user/create",
      user: { name, email }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Create User
      </h2>
      <input value={name} placeholder="name" onChange={handleNameChange} />
      <input
        value={email}
        type="email"
        placeholder="email"
        onChange={handleEmailChange}
      />
      <button type="submit">
        {loading && "creating"}
        {!loading && "submit"}
      </button>
    </form>
  );
}
