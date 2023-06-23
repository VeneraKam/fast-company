import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import UserInfo from "../userInfoCards";
import UserComments from "../userComments";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((response) => setUser(response));
  }, []);

  return (
    <>
      {user ? (
        <div className="container">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <UserInfo user={user} />
            </div>
            <div className="col-md-8">
              <UserComments userId={userId} userName={user.name} />
            </div>
          </div>
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
