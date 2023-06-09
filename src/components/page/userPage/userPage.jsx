import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../common/ui/qualities";
import { Link } from "react-router-dom";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((response) => setUser(response));
  }, []);
  const linkEditUser = "/users/" + userId + "/edit";

  return (
    <>
      {user ? (
        <div className="m-3">
          <h1>{user.name}</h1>
          <h2>Профессия: {user.profession.name}</h2>
          <Qualities qualities={user.qualities} />
          <h4>completedMeetings: {user.completedMeetings}</h4>
          <h5>Rate: {user.rate}</h5>
          <Link to={linkEditUser} className="btn btn-outline-dark">
            Изменить
          </Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

UserPage.propTypes = {
  userId: PropTypes.string,
};

export default UserPage;
