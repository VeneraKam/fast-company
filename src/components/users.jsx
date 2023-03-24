import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(
      users.filter((user) => {
        return user._id !== userId;
      })
    );
  };

  const renderPhrase = (number) => {
    let text = number + " человек тусанет с тобой сегодня";
    let color = "primary";

    if (number === 0) {
      text = "Никто с тобой не тусанет";
      color = "danger";
    } else if (
      number % 100 === 12 ||
      number % 100 === 13 ||
      number % 100 === 14
    ) {
      text = number + " человек тусанет с тобой сегодня";
    } else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
      text = number + " человекa тусанет с тобой сегодня";
    }

    return <span className={"badge bg-" + color}>{text}</span>;
  };

  const getQualities = (user) => {
    return user.qualities.map((quality) => (
      <span className={"badge bg-" + quality.color}>{quality.name}</span>
    ));
  };

  const renderRow = users.map((user) => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{getQualities(user)}</td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <button
          className="badge bg-danger"
          onClick={() => handleDelete(user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h1>{renderPhrase(users.length)}</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderRow}</tbody>
      </table>
    </>
  );
};

export default Users;
