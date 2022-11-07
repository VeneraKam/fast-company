import React from "react";
import PropTypes from "prop-types";
import QualtiesList from "./qualitiesList";

const User = ({ user, goToUsers }) => {
    return (
        <>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <h2>Профессия: {user.profession.name}</h2>
                    <QualtiesList qualities={user.qualities} />
                    <h4>completedMeetings: {user.completedMeetings}</h4>
                    <h3>Rate: {user.rate}</h3>
                    <button onClick={goToUsers}>Все пользователи</button>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    goToUsers: PropTypes.func
};

export default User;
