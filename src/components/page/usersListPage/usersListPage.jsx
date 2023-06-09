import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import UsersTable from "../../common/ui/usersTable";
import api from "../../../api";
import "bootstrap/dist/css/bootstrap.css";
import GroupList from "../../common/groupList";
import SearchStatus from "../../common/ui/searchStatus";
import SearchUsers from "../../common/ui/searchUsers";
import _ from "lodash";

const UsersListPage = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
  const [searchUsers, setSearchUsers] = useState("");

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
  }, [selectedProf, searchUsers]);

  if (users.length > 0) {
    let filteredUsers;
    if (selectedProf) {
      filteredUsers = users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
      );
    } else if (searchUsers) {
      filteredUsers = users.filter((user) =>
        JSON.stringify(user.name)
          .trim()
          .toLowerCase()
          .includes(searchUsers.trim())
      );
    } else {
      filteredUsers = users;
    }

    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, sortBy.path, sortBy.order);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);

    const handleProfessionSelect = (items) => {
      setSearchUsers("");
      setSelectedProf(items);
    };

    const clearFilter = () => {
      setSelectedProf();
    };

    const handleSort = (item) => {
      setSortBy(item);
    };

    const handleSearchUsers = (event) => {
      setSelectedProf();
      const { value } = event.target;
      setSearchUsers(value);
    };

    return (
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
          <SearchUsers
            searchValue={searchUsers}
            onSearchUsers={handleSearchUsers}
          />
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

UsersListPage.propTypes = {
  users: PropTypes.array,
  match: PropTypes.object,
};

export default UsersListPage;
