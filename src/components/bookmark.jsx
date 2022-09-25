import React from "react";

const BookMark = ({ userId, status, onBookMark }) => {
  const onToggle = () => {
    onBookMark(userId);
  };

  const getClass = () => {
    return status ? "bi bi-bookmark-heart-fill" : "bi bi-bookmark-heart";
  };

  return (
    <button className={getClass()} onClick={() => onToggle(userId)}></button>
  );
};

export default BookMark;
