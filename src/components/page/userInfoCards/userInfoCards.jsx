import React from "react";
import UserCard from "./userCard";
import QualitiesCard from "./qualitiesCard";
import MeetingsCard from "./meetingsCard";
import PropTypes from "prop-types";

const userInfoCards = ({ user }) => {
  // console.log(user);
  return (
    <>
      {user ? (
        <>
          <UserCard
            id={user._id}
            name={user.name}
            profession={user.profession}
            rate={user.rate}
          />
          <QualitiesCard qualities={user.qualities} />
          <MeetingsCard completedMeetings={user.completedMeetings} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

userInfoCards.propTypes = {
  user: PropTypes.object,
};

export default userInfoCards;
