import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Pagination from "../components/pagination";
import UsersTable from "../components/usersTable";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import GroupList from "../components/groupList";
import SearchStatus from "../components/searchStatus";
import _ from "lodash";
import UserPage from "../components/userPage";

const Users = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

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

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  // ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))

  if (users.length > 0) {
    const filteredUsers = selectedProf
      ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
      : users;
    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, sortBy.path, sortBy.order);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);

    const handleProfessionSelect = (items) => {
      setSelectedProf(items);
    };

    const clearFilter = () => {
      setSelectedProf();
    };

    const handleSort = (item) => {
      setSortBy(item);
    };

    const userId = match.params.userId;

    return userId
      ? (<UserPage userId={userId} />)
      : (
        <div className="d-flex">
          {professions && (
            <div className="d-flex flex-column flex-shrink-0 p-3">
              <GroupList
                items={professions}
                selectedItem={selectedProf}
                onItemSelect={handleProfessionSelect}
              />
              <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Очистить
              </button>
            </div>
          )}
          <div className="d-flex flex-column">
            <SearchStatus length={count} />
            {count > 0 && (
              <UsersTable
                users={usersCrop}
                onSort={handleSort}
                selectedSort={sortBy}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
              />
            )}
            <div className="d-flex justify-content-center">
              <Pagination
                itemCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      );
  }
  return "Loading...";
};

Users.propTypes = {
  users: PropTypes.array,
  match: PropTypes.object,
};

export default Users;
