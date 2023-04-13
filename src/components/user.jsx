import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, onDelete }) => {
  return (
    <>
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          <Quality qualities={user.qualities} />
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <Bookmark bookmark={user.bookmark} />
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => onDelete(user._id)}>
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default User;
