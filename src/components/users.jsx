import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import SearchStatus from "./searchStatus";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const userCrop = paginate(users, currentPage, pageSize);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => {
      return user._id !== userId;
    });
    setUsers(updatedUsers);
  };

  return (
    <>
      <SearchStatus length={count} />
      {count > 0 && (
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
            {userCrop.map((user) => (
              <User key={user._id} user={user} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Users;
