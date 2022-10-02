import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, onDeleteUser, onToggleBookMarkUser }) => {
    const handleDelete = () => {
        onDeleteUser(user._id);
    };

    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((quality) => (
                    <Qualitie key={quality._id} {...quality} />
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate + " /5"}</td>
            <td>
                <BookMark
                    userId={user._id}
                    status={user.bookmark}
                    onBookMark={onToggleBookMarkUser}
                />
            </td>
            <td>
                <button className="badge bg-danger" onClick={handleDelete}>
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.string.isRequired,
    onDeleteUser: PropTypes.func.isRequired,
    onToggleBookMarkUser: PropTypes.func.isRequired
};

export default User;
