import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function List() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const loading = useSelector(state => state.user.loading);
  useEffect(() => {
    dispatch({ type: "user/fetch" });
  }, [dispatch]);
  return (
    <div>
      <h2>User List</h2>
      <table style={{ width: 500, border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>ID</th>
            <th style={{ textAlign: "left" }}>Name</th>
            <th style={{ textAlign: "left" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email }) => (
            <tr key={id}>
              <td style={{ textAlign: "left" }}>{id}</td>
              <td style={{ textAlign: "left" }}>{name}</td>
              <td style={{ textAlign: "left" }}>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && "loading"}
    </div>
  );
}
