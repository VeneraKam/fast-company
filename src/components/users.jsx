import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

const Users = () => {
  console.log(api.users.fetchAll());
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };
  const renderPhrase = (number) => {
    let text = (
      <span className="badge bg-primary">
        {number + " человек тусанет с тобой сегодня"}
      </span>
    );
    if (number === 0) {
      text = <span className="badge bg-danger">Никто с тобой не тусанет</span>;
    } else if (
      (number < 5 || number > 21) &&
      (number % 10 === 2 || number % 10 === 3 || number % 10 === 4)
    ) {
      text = (
        <span className="badge bg-primary">
          {number + " человека тусанет с тобой сегодня"}
        </span>
      );
    }
    return text;
  };
  const getClassSpan = (color) => {
    return "badge bg-" + color;
  };

  const renderRow = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((quality) => (
            <span key={quality._id} className={getClassSpan(quality.color)}>
              {quality.name}
            </span>
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate + " /5"}</td>
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
  };

  return (
    <>
      <h1>{renderPhrase(users.length)}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderRow()}</tbody>
      </table>
    </>
  );
};

export default Users;
