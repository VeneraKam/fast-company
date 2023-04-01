import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import SearchStatus from "./searchStatus";
import User from "./user";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => {
      return user._id !== userId;
    });
    setUsers(updatedUsers);
  };

  return (
    <>
      <SearchStatus length={users.length} />
      {users.length !== 0 && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} user={user} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
