import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UserImg from "../../common/userImg";

const userCard = ({ id, name, profession, rate }) => {
  const linkEditUser = "/users/" + id + "/edit";

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <button className="position-absolute top-0 end-0 btn btn-light btn-sm">
            <Link to={linkEditUser} className="bi bi-gear"></Link>
          </button>
          <div className="d-flex flex-column align-items-center text-center position-relative">
            <UserImg
              className="rounded-circle"
              width="150"
            />
            <div className="mt-3">
              <h4>{name}</h4>
              <p className="text-secondary mb-1">{profession.name}</p>
              <div className="text-muted">
                <i
                  className="bi bi-caret-down-fill text-primary"
                  role="button"
                ></i>
                <i className="bi bi-caret-up text-secondary" role="button"></i>
                <span className="ms-2">{rate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

userCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.object,
  rate: PropTypes.number,
};

export default userCard;
