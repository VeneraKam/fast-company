import React, { useEffect, useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.users.fetchAll().then((response) => setUsers(response));
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };
  return (
    <>
      {users.length === 0 ? (<div>{"Loading..."}</div>) : (<Users onDelete={handleDelete} onToggleBookMark={handleToggleBookMark} users={users} />)}
    </>
  );
}

export default App;
