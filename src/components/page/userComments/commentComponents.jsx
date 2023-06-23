import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { getDataText } from "../../../utils/date";

const CommentComponents = ({ comment, onDelete }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(comment.userId).then((response) => setUser(response));
  }, []);

  return (
    <>
      <div className="bg-light card-body  mb-3">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-start ">
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${(
                  Math.random() + 1
                )
                  .toString(36)
                  .substring(7)}.svg`}
                alt="avatar"
                className="floored-circle shadow-1-strong me-3"
                width="65"
                height="65"
              />
              <div className="flex-grow-1 flex-shrink-1">
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-1 ">
                      {user && user.name}
                      <span className="small">
                        /{getDataText(comment.created_at)}
                      </span>
                    </p>
                    <button
                      className="btn btn-sm text-primary d-flex align-items-center"
                      onClick={() => onDelete(comment._id)}
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>
                  <p className="small mb-0">{comment.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CommentComponents.propTypes = {
  comment: PropTypes.object,
  onDelete: PropTypes.func,
};

export default CommentComponents;