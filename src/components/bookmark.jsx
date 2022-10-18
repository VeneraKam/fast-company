import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ userId, status, onBookMark }) => {
    const onToggle = () => {
        onBookMark(userId);
    };

    const getClass = () => {
        return status ? "bi bi-bookmark-heart-fill" : "bi bi-bookmark-heart";
    };

    return (
        <button
            className={getClass()}
            onClick={() => onToggle(userId)}
        ></button>
    );
};

BookMark.propTypes = {
    userId: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    onBookMark: PropTypes.func.isRequired
};

export default BookMark;
