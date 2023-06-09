import React from "react";
import PropTypes from "prop-types";

const SearchUsers = ({ searchValue, onSearchUsers }) => {
  return (
    <>
      <form action="">
        <input
          className="w-100"
          type="text"
          name="search"
          placeholder="Search..."
          value={searchValue}
          onChange={onSearchUsers}
        />
      </form>
    </>
  );
};

SearchUsers.propTypes = {
  searchValue: PropTypes.string,
  onSearchUsers: PropTypes.func,
};

export default SearchUsers;
