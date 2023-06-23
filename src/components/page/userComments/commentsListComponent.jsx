import React, { useState, useEffect } from "react";
import CommentComponents from "./commentComponents";
import NewComment from "./newComment";
import api from "../../../api";
import PropTypes from "prop-types";

const CommentsListComponent = ({ userId }) => {
  const [data, setData] = useState({
    user: "",
    text: "",
  });
  const [users, setUsers] = useState([]);
  const [commentsForUser, setCommentsForUser] = useState();

  useEffect(() => {
    // api.comments.fetchAll().then((response) => setComments(response));
    api.comments
      .fetchCommentsForUser(userId)
      .then((response) => setCommentsForUser(response));
    api.users.fetchAll().then((data) => {
      const usersList = Object.keys(data).map((professionName) => ({
        label: data[professionName].name,
        value: data[professionName]._id,
      }));
      setUsers(usersList);
    });
  }, []);

  const handleDelete = (id) => {
    api.comments
      .remove(id)
      .then(() =>
        api.comments
          .fetchCommentsForUser(userId)
          .then((response) => setCommentsForUser(response))
      );
  };

  const handleAdd = (newComment) => {
    if (!newComment.userId) {
      alert("Выберите пользователя!");
    } else if (!newComment.content) {
      alert("Напишите комментарий!");
    } else {
      api.comments
        .add(newComment)
        .then(() =>
          api.comments
            .fetchCommentsForUser(userId)
            .then((response) => setCommentsForUser(response))
        );
      setData({ user: "", text: "" });
    }
  };

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <>
      <div className="card mb-2">
        {" "}
        <div className="card-body ">
          <NewComment
            id={userId}
            users={users}
            data={data}
            onAdd={handleAdd}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body ">
          <h2>Comments</h2>
          <hr />
          {commentsForUser &&
            commentsForUser.map((comment) => (
              <CommentComponents
                key={comment._id}
                comment={comment}
                onDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </>
  );
};

CommentsListComponent.propTypes = {
  userId: PropTypes.string,
};

export default CommentsListComponent;
